import API from "./API"
import axios from "axios"
let { endpoint, path } = API;

let postExpense = async (id, t, d, v) => {
    const data = JSON.stringify({
        userid: id,
        title: t,
        detail: d,
        value: parseInt(v)
    });
    const config = {
        headers: { "Content-Type": "application/json" }
    }

    try {
        let res = await axios.post(endpoint.concat(path.postExpense), data, config)
        return res

    } catch (error) {
        return error;
    }
}

let deleteExpense = async (user, list) => {
    const data = JSON.stringify({
        userid: user,
        listid: list,
    });
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    try {
        let res = await axios.post(endpoint.concat(path.deleteExpense), data, config)
        return res

    } catch (error) {
        return error;
    }
}

let getExpenses = async (d) => {
    try {
        let res = await axios.get(endpoint.concat(path.getExpenses) + "/" + d);

        return res;
    }
    catch (error) {
        return error;
    }
}

export { getExpenses, postExpense, deleteExpense }