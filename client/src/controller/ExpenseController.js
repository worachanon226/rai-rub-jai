import API from "./API"
import axios from "axios"
let { endpoint, path } = API;

let getExpenses = async (d) => {
    try {
        let res = await axios.get(endpoint.concat(path.getExpenses) + "/" + d);

        return res;
    }
    catch (error) {
        return error;
    }
}

export { getExpenses }