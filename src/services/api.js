import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL.replace(/\/$/, "") + "/api"
  : "";

const api = axios.create({
  baseURL,
});

export default api;