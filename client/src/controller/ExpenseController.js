import API from "./API"
import axios from "axios"
let { endpoint, path } = API;

let getExpenses = async (d) => {
    const config = {
        method: 'get',
        url: endpoint.concat(path.getExpenses),
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            str: d
        }
    }
    axios(config)
        .then(response => console.log(response))
        .catch(err => console.error(err))
}

export { getExpenses }