import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import axiosInstance from "../utils/Axios";


const Wishlist = () => {
  const [data, setData] = useState([]);
  const [email, setEmail]  = useState(localStorage.getItem("gmail"));
  const [length, setLength] = useState(0);

  //To update gmail value from localStorage
  useEffect(()=>{
    setEmail(localStorage.getItem("gmail"))
  },[localStorage.getItem("gmail")])
  
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
            setData(response.data.bookDetails);
            setLength(response.data.numberOfBooks);
            //console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
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
        <h2>No books added to the cart yet</h2>
      </div>
    )}
  </>
);
};

export default Wishlist;
