import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://gorest.co.in/public/v2",
    headers: {
        "Content-Type": "application/json",
    },
});

export const setAuthToken = (token) => {
    if (token) {
        apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete apiClient.defaults.headers.common["Authorization"];
    }
};

export default apiClient;
