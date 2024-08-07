import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Your backend URL
  withCredentials: true, // Include credentials (cookies) with requests
});

export default axiosInstance;
