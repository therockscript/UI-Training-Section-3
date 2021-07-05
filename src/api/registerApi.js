import axios from "axios";

async function registerUser(Forminputs) {
    try {
        const config = {
            method: "post",
            url: "https://api-nodejs-todolist.herokuapp.com/user/register",
            headers: {
            "Content-Type": "application/json",
            },
            data: JSON.stringify(Forminputs),
        };
        const reponse = await axios(config);
        return reponse.data.data;
    } catch (error) {
    }
}

export async function loginUser(Forminputs) {
    try {
        const config = {
            method: "post",
            url: "https://api-nodejs-todolist.herokuapp.com/user/login",
            headers: {
            "Content-Type": "application/json",
            },
            data: JSON.stringify(Forminputs),
        };
        const reponse = await axios(config);
        return reponse.data;
    } catch (error) {
    }
}

export async function logout(Forminputs) {
    try {
        const config = {
            method: "post",
            url: "https://api-nodejs-todolist.herokuapp.com/user/logout",
            headers: {
            "Content-Type": "application/json",
            },
            data: JSON.stringify(Forminputs),
        };
        const reponse = await axios(config);
        return reponse.data;
    } catch (error) {
    }
}

export default registerUser;

