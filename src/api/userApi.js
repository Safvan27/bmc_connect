import apiClient from "./apiClient";

export const getUsers = async () => {
    try {
        const response = await apiClient.get("/users");
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the users!", error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await apiClient.post("/users", userData);
        return response.data;
    } catch (error) {
        console.error("There was an error creating the user!", error);
        throw error;
    }
};

export const deleteUser = async (user_id) => {
    try {
        const response = await apiClient.delete(`/users/${user_id}`);
        return response.data;
    } catch (error) {
        console.error("There was an error delete the user!", error);
        throw error;
    }
};

export const loadMoreUsers = async (page_num, count) => {
    try {
        const response = await apiClient.get(
            `/users?page=${page_num}&per_page=${count}`
        );
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the users!", error);
        throw error;
    }
};
