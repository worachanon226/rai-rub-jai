package service

import (
	"rai-rub-jai/backend/modules/entities"

	"go.mongodb.org/mongo-driver/mongo"
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

func UserRegister(entities.UserRegisterReq) {
	_ = col
}
