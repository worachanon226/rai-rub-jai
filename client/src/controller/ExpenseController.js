import API from "./API"
import axios from "axios"
let { endpoint, path } = API;

let getExpenses = async (d) => {
    console.log("in controller: " + d)
    try {
        let res = await axios.get(endpoint.concat(path.getExpenses) + "/" + d);

        return res.data;
    }
    catch (error) {
        console.log(error.response)
        return error;
    }
}

export { getExpenses }