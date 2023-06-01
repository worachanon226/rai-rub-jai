package service

import (
	"context"
	"fmt"
	"rai-rub-jai/backend/modules/entities"
	"time"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func PostRevenue(req *entities.PostRevenueReq) error {
	filter := bson.D{{Key: "userid", Value: req.UserID}}
	var re entities.Revenues

	err := coll.RevenueCollection.FindOne(context.TODO(), filter).Decode(&re)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			re = entities.Revenues{
				ID:       uuid.New().String(),
				UserID:   req.UserID,
				Revenues: []entities.Revenue{},
			}

			_, err := coll.RevenueCollection.InsertOne(context.TODO(), re)
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

	re.Revenues = append(re.Revenues, newpost)

	filter = bson.D{{Key: "userid", Value: re.UserID}}
	update := bson.D{{Key: "$set", Value: bson.D{{Key: "revenues", Value: re.Revenues}}}}
	_, err = coll.RevenueCollection.UpdateOne(context.TODO(), filter, update)
	if err != nil {
		return err
	}

	return nil
}

func DeleteRevenue(userid string, listid string) error {
	filter := bson.D{{Key: "userid", Value: userid}}
	var rvs entities.Revenues

	err := coll.RevenueCollection.FindOne(context.TODO(), filter).Decode(&rvs)
	if err != nil {
		return err
	}

	for i := 0; i < len(rvs.Revenues); i++ {
		if rvs.Revenues[i].ID == listid {
			rvs.Revenues = append(rvs.Revenues[:i], rvs.Revenues[i+1:]...)
		}
		fmt.Println(rvs.Revenues)
	}

	update := bson.D{{Key: "$set", Value: bson.D{{Key: "revenues", Value: rvs.Revenues}}}}
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
