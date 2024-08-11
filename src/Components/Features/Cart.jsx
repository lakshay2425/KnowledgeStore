import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import axiosInstance from "../utils/Axios"; // Use 'import' instead of 'require'
import { useSelector } from 'react-redux';

const Cart = () => {
  const [data, setData] = useState([]);
  const email  = useSelector((state) => state.auth.email);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axiosInstance.post("http://localhost:3000/user/cart", 
              {email}, 
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            setData(response.data.result);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);
  return <div className="d-flex flex-wrap"><ProductCard books={data} /></div>
}

export default Cart
