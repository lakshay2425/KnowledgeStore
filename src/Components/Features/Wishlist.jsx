import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import axiosInstance from "../utils/Axios";
import { useAlert } from "../utils/setAlert";

const Wishlist = () => {
  const [data, setData] = useState([]);
  const [email, setEmail]  = useState(localStorage.getItem("gmail"));
  const [length, setLength] = useState(0);
  const { handleError } = useAlert();

  //To update gmail value from localStorage
  useEffect(()=>{
    setEmail(localStorage.getItem("gmail"))
  },[localStorage.getItem("gmail")])
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axiosInstance.post(`${import.meta.env.VITE_BACKEND_URL}/user/wishlist`,
              {email},
              {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            setData(response.data.bookDetails);
            setLength(response.data.numberOfBooks);
            //console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            if (error.response.status === 429) {
              handleError('Rate limit exceeded. Please try again later.');
            }
        }
    };
    fetchData();
}, [email]);

return (
  <>
    {length > 0 ? (
      <div className="d-flex flex-wrap">
        <ProductCard books={data} />
      </div>
    ) : (
      <div>
        <h2>No books added to the wishlist yet</h2>
      </div>
    )}
  </>
);
};

export default Wishlist;
