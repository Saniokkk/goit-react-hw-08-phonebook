import axios from "axios";

// const API_KEY = "62ab5483bd0e5d29af0db9f4";
axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

async function signupUser(dataUser) {
    const response = await axios.post('/users/signup', dataUser);
    return response.data
}

async function loginUser(dataUser) {
    const response = await axios.post('/users/login', dataUser);
    return response.data
}

async function currentUser(token) {
    const response = await axios.get('/users/current', {
        headers: {
            Authorization: token,
        },
    });
    return response.data
}

async function logoutUser(token) {
    const response = await axios.post('/users/logout', null, {
        headers: {
            Authorization: token,
        },
    });
    return response.data
}

async function getContacts(token) {
    const response = await axios.get('/contacts', {
        headers: {
            Authorization: token,
        },
    })
    return response.data
}

async function addContact(obj, token) {
    const response = await axios.post(`/contacts`, obj, {
        headers: {
            Authorization: token,
        },
    });
    return response.data
}

async function deleteContact(id, token) {
        const response = await axios.delete(`/contacts/${id}`, {
        headers: {
            Authorization: token,
        },
    });
    return response.data
}

export const API = {
    signupUser,
    loginUser,
    currentUser,
    logoutUser,
    getContacts,
    addContact,
    deleteContact,
}