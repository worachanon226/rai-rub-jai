package entities

import "time"

type Revenues struct {
	ID       string    `json:"id" bson:"_id"`
	UserID   string    `json:"userid" bson:"userid"`
	Revenues []Revenue `json:"expenses" bson:"expenses"`
}

type Revenue struct {
	ID     string    `json:"id" bson:"_id"`
	Date   time.Time `json:"date" bson:"time"`
	Title  string    `json:"title" bson:"title"`
	Detail string    `json:"detail" bson:"detail"`
	Value  int64     `json:"value" bson:"value"`
}
