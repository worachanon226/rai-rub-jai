package database

import (
	"context"
	"fmt"
	"rai-rub-jai/backend/config"
	"rai-rub-jai/backend/pkg/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func NewMongoDBConnection(cfg *config.Config) (*mongo.Client, error) {
	MongoURL, err := utils.ConnectionBuilder("mongodb", cfg)
	fmt.Println(MongoURL)
	if err != nil {
		panic(err)
	}

	opts := options.Client().ApplyURI(MongoURL)
	db, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		panic(err)
	}

	if err := db.Database("admin").RunCommand(context.TODO(), bson.D{{Key: "ping", Value: 1}}).Err(); err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected to MongoDB")
	return db, nil
}
