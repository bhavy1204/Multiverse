import axiosInstance from "./axios.js";

class ApiClient {

    async get(url, config = {}) {
        const response = await axiosInstance.get(url, config);
        return response.data;
    }

    async post(url, data, config = {}) {
        const response = await axiosInstance.post(url, data, config);
        return response.data;

    }

    async put(url, data, config = {}) {
        const response = await axiosInstance.put(url, data, config);
        return response.data;
    }

    async patch(url, data, config = {}) {
        const response = await axiosInstance.patch(url, data, config);
        return response.data;
    }

    async delete(url, config = {}) {
        const response = await axiosInstance.delete(url, config);
        return response.data;
    }


}

const apiCLient = new ApiClient();

export default apiCLient;