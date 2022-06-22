import axios from "axios";
import Cookies from "js-cookie";
import {api_config} from "services/api/config";


const axiosInstance = axios.create({
    baseURL: api_config.api_host + api_config.api_endpoint + api_config.api_version,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = Cookies.get("auth-token");

        if (authToken) {
            config.headers.authorization = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
