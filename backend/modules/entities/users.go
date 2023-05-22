package entities

type UserRegisterReq struct {
	UserID string `json:"id" bson:"_id"`
	User   string `json:"username" bson:"username"`
	Pass   string `json:"password" bson:"password"`
}

type UserRegisterRes struct {
	UserID string `json:"id" bson:"_id"`
	User   string `json:"username" bson:"username"`
}

type UserLoginReq struct {
	User string `json:"username" bson:"username"`
	Pass string `json:"password" bson:"password"`
}

type UserCollection struct {
	UserID   string `json:"id" bson:"_id"`
	User     string `json:"username" bson:"username"`
	HashPass string `json:"hashpass" bson:"hashpass"`
}
