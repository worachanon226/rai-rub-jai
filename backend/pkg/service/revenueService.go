package service

import (
	"context"
	"rai-rub-jai/backend/modules/entities"
	"time"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func PostRevenue(req *entities.PostRevenueReq) error {
	filter := bson.D{{Key: "userid", Value: req.UserID}}
	var ex entities.Revenues

	err := coll.RevenueCollection.FindOne(context.TODO(), filter).Decode(&ex)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			ex = entities.Revenues{
				ID:       uuid.New().String(),
				UserID:   req.UserID,
				Revenues: []entities.Revenue{},
			}

			_, err := coll.RevenueCollection.InsertOne(context.TODO(), ex)
			if err != nil {
				return err
			}
		}
	}

	newpost := entities.Revenue{
		ID:     uuid.New().String(),
		Date:   time.Now(),
		Title:  req.Title,
		Detail: req.Detail,
		Value:  req.Value,
		Type:   "revenue",
	}

	ex.Revenues = append(ex.Revenues, newpost)

	filter = bson.D{{Key: "userid", Value: ex.UserID}}
	update := bson.D{{Key: "$set", Value: bson.D{{Key: "revenues", Value: ex.Revenues}}}}
	_, err = coll.RevenueCollection.UpdateOne(context.TODO(), filter, update)
	if err != nil {
		return err
	}

	return nil
}

func GetRevenue(req string) ([]entities.Revenue, error) {
	filter := bson.D{{Key: "userid", Value: req}}
	var exs entities.Revenues

	err := coll.RevenueCollection.FindOne(context.TODO(), filter).Decode(&exs)
	if err != nil {
		return nil, err
	}

	return exs.Revenues, nil
}
