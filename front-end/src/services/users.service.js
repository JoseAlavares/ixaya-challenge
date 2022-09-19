import axios from 'axios'

const BACKEND_URL = process.env.REACT_APP_DOMAIN;
const API_KEY = process.env.REACT_APP_API_KEY;
const TOKEN = window.sessionStorage.getItem("jwt");
const axiosLoginInstance = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key": `ApiKey ${API_KEY}`,
    }
});
const axiosUserInstance = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`,
    }
})

export async function getUsersService() {
    let headers = {"Content-Type": "application/json"};

    if(TOKEN)
        headers["Authorization"] = `Bearer ${TOKEN}`;

    try {
        const { data } = await axiosUserInstance.get('/api/users');

        return { data };
    } catch(err) {
        console.error(err.message);
        return {
            error: true,
            message: 'Error in the request'
        };
    }
}

export async function loginService(user, password) {
    try {
        const { data } = await axiosUserInstance.post('/api/user/login', {
            user: user,
            password: password
        });

        return data;
    } catch (error) {
        console.error(error.message)
        return {
            error: true,
            message: error?.response?.data?.message || "Error in the request"
        }
    }
}

export async function createUserService(name, email, password) {
    try {
        const result = await axios({
            method: "POST",
            url: `${BACKEND_URL}/api/users`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `ApiKey ${API_KEY}`
            },
            data: {
                name: name,
                email: email,
                password: password
            }
        })

        const {data: {data}} = result
        return {data: data}
    } catch (error) {
        console.error(error.message)
        return {
            error: true,
            message: error?.response?.data?.message || "Error in the request"
        }
    }
}

export async function getUserInfo(id) {
    try {
        const TOKEN = window.sessionStorage.getItem("jwt");
        const result = await axios({
            method: "GET",
            url: `${BACKEND_URL}/api/users/${id}`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            }
        });

        const {data: {data}} = result
        return {data: data}
    } catch (error) {
        console.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

export async function editUser(formData) {
    try {
        const TOKEN = window.sessionStorage.getItem("jwt");
        const result = await axios({
            method: "PUT",
            url: `${BACKEND_URL}/api/users`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            data: formData
        });

        const {data: {data}} = result;
        return {data: data};
    } catch (error) {
        console.error(error.message);
        return {
            error: true,
            message: error.message
        }
    }
}

export async function deleteAccount(id) {
    try {
        const TOKEN = window.sessionStorage.getItem("jwt");
        const result = await axios({
            method: "DELETE",
            url: `${BACKEND_URL}/api/users`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            data: {
                id: id
            }
        });

        const {data: {data}} = result
        return {data: data};
    } catch (error) {
        console.error(error.message);
        return {
            error: true,
            message: error.message
        };
    }
}
