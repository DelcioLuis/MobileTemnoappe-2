import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.43.65:3002/",
})
export default api;