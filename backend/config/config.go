package config

type Config struct {
	MongoDB MongoDB
	App     Fiber
}

type MongoDB struct {
	Username string
	Password string
	Cluster  string
}

type Fiber struct {
	Host string
	Port string
}
