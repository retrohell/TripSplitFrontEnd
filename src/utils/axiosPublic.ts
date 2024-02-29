import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:8000/api",
  // baseURL: import.meta.env.MODE == "development"? import.meta.env.VITE_DEV_API : import.meta.env.VITE_PROD_API,
  headers: {
    "Content-Type": "application/json",
    
  },
});