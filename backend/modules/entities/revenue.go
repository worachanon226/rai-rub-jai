package entities

import "time"

type Revenues struct {
	ID       string    `json:"id" bson:"_id"`
	UserID   string    `json:"userid" bson:"userid"`
	Revenues []Revenue `json:"revenues" bson:"revenues"`
}

type Revenue struct {
	ID     string    `json:"id" bson:"_id"`
	Date   time.Time `json:"date" bson:"time"`
	Title  string    `json:"title" bson:"title"`
	Detail string    `json:"detail" bson:"detail"`
	Value  int64     `json:"value" bson:"value"`
	Type   string    `json:"type" bson:"type"`
}

type PostRevenueReq struct {
	ID     string    `json:"id" bson:"_id"`
	UserID string    `json:"userid" bson:"userid"`
	Date   time.Time `json:"date" bson:"time"`
	Title  string    `json:"title" bson:"title"`
	Detail string    `json:"detail" bson:"detail"`
	Value  int64     `json:"value" bson:"value"`
}
