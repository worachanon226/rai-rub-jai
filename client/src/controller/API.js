let API = {
    endpoint: "http://127.0.0.1:5000",
    path: {
        login: "/user/login",
        register: "/user/register",
        checkDupUser: "/user/checkDupUser",
        deleteExpense: "/user/deleteexpense",
        deleteRevenue: "/user/deleterevenue",
        postExpense: "/user/postexpense",
        postRevenue: "/user/postrevenue",
        getExpenses: "/user/getexpense",
        getRevenues: "/user/getrevenue",
    },
}

export default API