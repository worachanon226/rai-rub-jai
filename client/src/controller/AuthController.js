import API from "./API"
import axios from "axios"
let { endpoint, path } = API;

let submitRegister = async (data, callback) => {
    try {
        let res = await axios.post(endpoint.concat(path.register), {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        return res.status
    }
    catch (error) {
        return error;
    }
};
export { submitRegister }