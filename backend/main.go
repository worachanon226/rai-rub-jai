package main

import (
	"log"
	"os"
	"rai-rub-jai/backend/config"
	"rai-rub-jai/backend/modules/servers"
	"rai-rub-jai/backend/pkg/database"

	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(".env"); err != nil {
		panic(err.Error())
	}

	cfg := new(config.Config)

	cfg.App.Host = os.Getenv("FIBER_HOST")
	cfg.App.Port = os.Getenv("FIBER_PORT")

	cfg.MongoDB.Username = os.Getenv("DB_USER")
	cfg.MongoDB.Password = os.Getenv("DB_PASS")
	cfg.MongoDB.Cluster = os.Getenv("DB_CLUS")

	db, err := database.NewMongoDBConnection(cfg)
	if err != nil {
		log.Fatalln(err.Error())
	}

	s := servers.NewServer(cfg, db)
	s.Start()
}
