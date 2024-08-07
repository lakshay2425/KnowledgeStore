import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
const axiosInstance = require("../utils/Axios");

const Cart = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
            const apiUrl = "http://localhost:3000/user/cart";
            const response = await axiosInstance.get(apiUrl);
            setData(response.data.result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);
  return <div className="d-flex flex-wrap"><ProductCard books={data} /></div>
}

export default Cart
