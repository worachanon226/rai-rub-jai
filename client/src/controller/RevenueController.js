import API from "./API"
import axios from "axios"
let { endpoint, path } = API;

let getRevenues = async (d) => {
    try {
        let res = await axios.get(endpoint.concat(path.getRevenues) + "/" + d);

        return res;
    }
    catch (error) {
        return error;
    }
}

export { getRevenues }