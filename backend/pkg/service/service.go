package service

import (
	"go.mongodb.org/mongo-driver/mongo"
)

type Collection struct {
	UserCollection    *mongo.Collection
	ExpenseCollection *mongo.Collection
	RevenueCollection *mongo.Collection
}

var coll Collection

func NewService(db *mongo.Client) {
	coll = Collection{
		UserCollection:    (*mongo.Collection)(db.Database("Rai-Rub-Jai").Collection("Users")),
		ExpenseCollection: (*mongo.Collection)(db.Database("Rai-Rub-Jai").Collection("Expenses")),
		RevenueCollection: (*mongo.Collection)(db.Database("Rai-Rub-Jai").Collection("Revenues")),
	}
}
