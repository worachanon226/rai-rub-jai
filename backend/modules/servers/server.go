package servers

import (
	"log"
	"rai-rub-jai/backend/config"
	"rai-rub-jai/backend/pkg/utils"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"go.mongodb.org/mongo-driver/mongo"
)

type Server struct {
	App *fiber.App
	Cfg *config.Config
	Db  *mongo.Client
}

func NewServer(cfg *config.Config, db *mongo.Client) *Server {
	app := fiber.New()
	app.Use(cors.New())

	return &Server{
		App: app,
		Cfg: cfg,
		Db:  db,
	}
}

func (s *Server) Start() {
	if err := s.MapHandlers(); err != nil {
		log.Fatalln(err.Error())
		panic(err.Error())
	}
	fiberConn, err := utils.ConnectionBuilder("fiber", s.Cfg)
	if err != nil {
		log.Fatalln(err.Error())
		panic(err.Error())
	}

	host := s.Cfg.App.Host
	port := s.Cfg.App.Port

	log.Printf("server has been started on %s:%s\n", host, port)

	if err := s.App.Listen(fiberConn); err != nil {
		log.Fatal(err.Error())
		panic(err.Error())
	}
}
