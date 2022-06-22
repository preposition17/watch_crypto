import axios from "./axios";

const api = {
    announcements: () => axios.get("announcements"),
    projects: () => axios.get("projects"),
    auth: {
        token: (data) => axios.post("auth/token/", data),
        token_refresh: (data) => axios.post("auth/token/refresh/", data),
        token_verify: (data) => axios.post("auth/token/verify/", data)
    }
};

export default api;
