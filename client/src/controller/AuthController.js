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

let confirmPassword = () => {
    var p = document.getElementById("pass")
    var cp = document.getElementById("cpass")
    var txt = document.getElementById("txt")
    var bt = document.getElementById("submit")

    if (p.value !== cp.value && cp.value !== "") {
        bt.disabled = true;
        txt.style.visibility = "visible";
        p.style.border = "1px solid red"
        cp.style.border = "1px solid red"
    } else if (p.value === cp.value) {
        bt.disabled = false;
        txt.style.visibility = "hidden";
        p.style.border = ""
        cp.style.border = ""
    }
}

export { submitRegister, confirmPassword }