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

func UserRegister(req *entities.UserRegisterReq) (*entities.UserRegisterRes, error) {
	hashed, err := bcrypt.GenerateFromPassword([]byte(req.Pass), 10)
	if err != nil {
		return nil, err
	}

	user := entities.UserCollection{
		UserID:   uuid.New().String(),
		User:     req.User,
		HashPass: string(hashed),
	}

	_, err = coll.UserCollection.InsertOne(context.TODO(), user)
	if err != nil {
		return nil, err
	}

	res := &entities.UserRegisterRes{
		UserID: user.UserID,
		User:   user.User,
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
	}

	ch := bcrypt.CompareHashAndPassword([]byte(userData.HashPass), []byte(req.Pass))
	if ch != nil {
		return nil, errors.New("password is wrong")
	}

	res := &entities.UserRegisterRes{
		UserID: userData.UserID,
		User:   userData.User,
	}

	return res, nil
}

func IsUser(user string) bool {
	var u entities.UserCollection
	err := coll.UserCollection.FindOne(context.TODO(), bson.D{{Key: "username", Value: user}}).Decode(&u)
	return err == nil
}
