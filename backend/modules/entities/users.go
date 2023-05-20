package entities

type UserRegisterReq struct {
	UserID string `json:"id" bson:"_id"`
	User   string `json:"username" bson:"username"`
	Pass   string `json:"password" bson:"password"`
	Email  string `json:"email" bson:"email"`
}

type UserRegisterRes struct {
	UserID string `json:"id" bson:"_id"`
	User   string `json:"username" bson:"username"`
	Email  string `json:"email" bson:"email"`
}

type UserLoginReq struct {
	User string `json:"username" bson:"username"`
	Pass string `json:"password" bson:"password"`
}

type UserCollection struct {
	UserID   string `json:"id" bson:"_id"`
	User     string `json:"username" bson:"username"`
	Email    string `json:"email" bson:"email"`
	HashPass string `json:"hashpass" bson:"hashpass"`
}
