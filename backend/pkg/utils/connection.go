package utils

import (
	"errors"
	"fmt"
	"rai-rub-jai/backend/config"
)

func ConnectionBuilder(stuff string, cfg *config.Config) (string, error) {
	var url string

	if stuff == "fiber" {
		url = fmt.Sprintf(":%s", cfg.App.Port)
	} else if stuff == "mongodb" {
		// url = fmt.Sprint("mongodb://root:pass%40Root@127.0.0.1:27017")
		// url = "mongodb://localhost:27017/"
		url = cfg.MongoDB.URI
	} else {
		err := fmt.Sprintf("error, connection url builder doesn't know the %s", stuff)
		return "", errors.New(err)
	}

	return url, nil
}
