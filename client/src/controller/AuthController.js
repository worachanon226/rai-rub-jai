import API from "./API"
import axios from "axios"
let { endpoint, path } = API;


let submitRegister = async (data, callback) => {
    try {
        let res = await axios.post(endpoint.concat(path.register),
            JSON.stringify(data),
            {
                headers: { "Content-Type": "application/json" }
            }
        );

        return res.data;
    }
    catch (error) {
        return error;
    }
};

let submitLogin = async (user, pass, callback) => {
    try {
        let res = await axios.post(endpoint.concat(path.login),
            JSON.stringify(user, pass),
            {
                headers: { "Content-Type": "application/json" }
            }
        );
        return res
    }
    catch (error) {
        return error;
    }
}

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

let checkDupUser = async () => {
    var u = document.getElementById("user").value
    var utxt = document.getElementById("utxt")
    var p = document.getElementById("user")
    var bt = document.getElementById("submit")

    try {
        let res = await axios.post(endpoint.concat(path.checkDupUser),
            u,
            {
                headers: { "Content-Type": "text/plain" },
            }
        );

        if (res.data === true) {
            bt.disabled = true;
            utxt.style.visibility = "visible"
            p.style.border = "1px solid red"
        } else if (res.data === false) {
            bt.disabled = false;
            utxt.style.visibility = "hidden"
            p.style.border = ""
        }
    }
    catch (error) {
        return error;
    }
}

export { submitRegister, submitLogin, confirmPassword, checkDupUser }