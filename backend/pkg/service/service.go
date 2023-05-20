package service

import (
	"context"
	"rai-rub-jai/backend/modules/entities"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)

type Collection struct {
	UserCollection *mongo.Collection
}

var col Collection

func NewService(db *mongo.Client) {
	col = Collection{
		UserCollection: (*mongo.Collection)(db.Database("Rai-Rub-Jai").Collection("Users")),
	}
}

func UserRegister(req *entities.UserRegisterReq) error {
	hashed, err := bcrypt.GenerateFromPassword([]byte(req.Pass), 10)
	if err != nil {
		return err
	}

	user := entities.UserCollection{
		UserID:   uuid.New().String(),
		User:     req.User,
		Email:    req.Email,
		HashPass: string(hashed),
	}

	res, err := col.UserCollection.InsertOne(context.Background(), user)
	if err != nil {
		return err
	}
	_ = res

	return nil
}
