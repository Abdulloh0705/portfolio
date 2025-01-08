import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("access_token")
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`
        }
        return config
    }
)

