package service

import (
	"context"
	"rai-rub-jai/backend/modules/entities"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func PostExpense(req *entities.PostExpenseReq) error {
	filter := bson.D{{Key: "userid", Value: req.UserID}}
	var ex entities.Expenses

	err := coll.ExpenseCollection.FindOne(context.TODO(), filter).Decode(ex)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			ex := entities.Expenses{
				ID:       uuid.New().String(),
				UserID:   req.UserID,
				Expenses: []entities.Expense{},
			}

			_, err := coll.ExpenseCollection.InsertOne(context.TODO(), ex)
			if err != nil {
				return err
			}
		}
	}

	return nil
}
