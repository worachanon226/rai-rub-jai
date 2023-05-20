package service

import (
	"context"
	"errors"
	"rai-rub-jai/backend/modules/entities"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)

type Collection struct {
	UserCollection *mongo.Collection
}

var coll Collection

func NewService(db *mongo.Client) {
	coll = Collection{
		UserCollection: (*mongo.Collection)(db.Database("Rai-Rub-Jai").Collection("Users")),
	}
}

func UserRegister(req *entities.UserRegisterReq) (*entities.UserRegisterRes, error) {
	hashed, err := bcrypt.GenerateFromPassword([]byte(req.Pass), 10)
	if err != nil {
		return nil, err
	}

	user := entities.UserCollection{
		UserID:   uuid.New().String(),
		User:     req.User,
		Email:    req.Email,
		HashPass: string(hashed),
	}

	r, err := coll.UserCollection.InsertOne(context.Background(), user)
	if err != nil {
		return nil, err
	}
	_ = r

	res := &entities.UserRegisterRes{
		UserID: user.UserID,
		User:   user.User,
		Email:  user.Email,
	}

	return res, nil
}

func UserLogin(req *entities.UserLoginReq) (*entities.UserRegisterRes, error) {

	filter := bson.D{{Key: "username", Value: req.User}}
	var userData entities.UserCollection

	err := coll.UserCollection.FindOne(context.TODO(), filter).Decode(&userData)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, errors.New("this username isn't registered")
		}
		panic(err.Error())
	}

	ch := bcrypt.CompareHashAndPassword([]byte(userData.HashPass), []byte(req.Pass))
	if ch != nil {
		return nil, errors.New("password is wrong")
	}

	res := &entities.UserRegisterRes{
		UserID: userData.UserID,
		User:   userData.User,
		Email:  userData.Email,
	}

	return res, nil
}
