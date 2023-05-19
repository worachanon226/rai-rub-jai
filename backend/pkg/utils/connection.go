package utils

import (
	"errors"
	"fmt"
	"rai-rub-jai/backend/config"
)

func ConnectionBuilder(stuff string, cfg *config.Config) (string, error) {
	var url string

	if stuff == "fiber" {
		url = fmt.Sprintf("%s:%s", cfg.App.Host, cfg.App.Port)
	} else if stuff == "mongodb" {
		url = fmt.Sprintf("mongodb+srv://%s:%s@%s.a1rfvkq.mongodb.net/?retryWrites=true&w=majority",
			cfg.MongoDB.Username, cfg.MongoDB.Password, cfg.MongoDB.Cluster)
	} else {
		err := fmt.Sprintf("error, connection url builder doesn't know the %s", stuff)
		return "", errors.New(err)
	}

	return url, nil
}
