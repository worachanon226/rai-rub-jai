package service

import (
	"context"
	"rai-rub-jai/backend/modules/entities"
	"time"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func PostExpense(req *entities.PostExpenseReq) error {
	filter := bson.D{{Key: "userid", Value: req.UserID}}
	var ex entities.Expenses

	err := coll.ExpenseCollection.FindOne(context.TODO(), filter).Decode(&ex)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			ex = entities.Expenses{
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

	newpost := entities.Expense{
		ID:     uuid.New().String(),
		Date:   time.Now(),
		Title:  req.Title,
		Detail: req.Detail,
		Value:  req.Value,
	}

	ex.Expenses = append(ex.Expenses, newpost)

	filter = bson.D{{Key: "userid", Value: ex.UserID}}
	update := bson.D{{Key: "$set", Value: bson.D{{Key: "expenses", Value: ex.Expenses}}}}
	_, err = coll.ExpenseCollection.UpdateOne(context.TODO(), filter, update)
	if err != nil {
		return err
	}

	return nil
}

func GetExpenses(req string) ([]entities.Expense, error) {
	filter := bson.D{{Key: "userid", Value: req}}
	var exs entities.Expenses

	err := coll.ExpenseCollection.FindOne(context.TODO(), filter).Decode(&exs)
	if err != nil {
		return nil, err
	}

	return exs.Expenses, nil
}
