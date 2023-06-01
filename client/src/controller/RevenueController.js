import API from "./API"
import axios from "axios"
let { endpoint, path } = API;

let postRevenue = async (id, t, d, v) => {

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
        let res = await axios.post(endpoint.concat(path.postRevenue), data, config)
        return res

    } catch (error) {
        return error;
    }
}

let deleteRevenue = async (user, list) => {
    const data = JSON.stringify({
        userid: user,
        listid: list,
    });
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    try {
        let res = await axios.post(endpoint.concat(path.deleteRevenue), data, config)
        return res

    } catch (error) {
        return error;
    }
}

let getRevenues = async (d) => {
    try {
        let res = await axios.get(endpoint.concat(path.getRevenues) + "/" + d);

        return res;
    }
    catch (error) {
        return error;
    }
}

export { getRevenues, postRevenue, deleteRevenue }