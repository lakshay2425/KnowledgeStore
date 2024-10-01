import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import axiosInstance from "../utils/Axios";


const Wishlist = () => {
  const [data, setData] = useState([]);
  const [email, setEmail]  = useState(sessionStorage.getItem("gmail"));
  
  //To update gmail value from sessionStorage
  useEffect(()=>{
    setEmail(sessionStorage.getItem("gmail"))
  },[sessionStorage.getItem("gmail")])
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axiosInstance.post("http://localhost:3000/user/wishlist",
              {email},
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            setData(response.data.result);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, [email]);

return <ProductCard books={data} />
}

export default Wishlist;
