import axios from "axios";

const API_KEY = "62ab5483bd0e5d29af0db9f4";
axios.defaults.baseURL = `https://${API_KEY}.mockapi.io/`;

export async function getContacts() {
    const response = await axios.get('/contacts/')
    return response.data
}

export async function addContact(obj) {
    const response = await axios.post(`/contacts/`, obj);
    return response.data
}

export async function deleteContact(id) {
        const response = await axios.delete(`/contacts/${id}`);
    return response.data
}


