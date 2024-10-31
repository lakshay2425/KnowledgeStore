import axios from 'axios';

// Create an instance of axios
const backendURL = import.meta.env.VITE_BACKEND_URL

const axiosInstance = axios.create({
  baseURL: backendURL, // Your backend URL
  withCredentials: true, // Include credentials (cookies) with requests
});

export default axiosInstance;
