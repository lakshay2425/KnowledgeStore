import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import axiosInstance from "../utils/Axios";


const Wishlist = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
          const apiUrl = "http://localhost:3000/user/wishlist";
            const response = await axiosInstance.get(apiUrl);
            setData(response.data.result);
            //console.log(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);

return <ProductCard books={data} />
}

export default Wishlist;
