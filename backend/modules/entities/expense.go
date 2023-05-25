package entities

import "time"

type Expenses struct {
	ID       string    `json:"id" bson:"_id"`
	UserID   string    `json:"userid" bson:"userid"`
	Expenses []Expense `json:"expenses" bson:"expenses"`
}

type Expense struct {
	ID     string    `json:"id" bson:"_id"`
	Date   time.Time `json:"date" bson:"time"`
	Title  string    `json:"title" bson:"title"`
	Detail string    `json:"detail" bson:"detail"`
	Value  int64     `json:"value" bson:"value"`
}

type PostExpenseReq struct {
	ID     string    `json:"id" bson:"_id"`
	UserID string    `json:"userid" bson:"userid"`
	Date   time.Time `json:"date" bson:"time"`
	Title  string    `json:"title" bson:"title"`
	Detail string    `json:"detail" bson:"detail"`
	Value  int64     `json:"value" bson:"value"`
}
