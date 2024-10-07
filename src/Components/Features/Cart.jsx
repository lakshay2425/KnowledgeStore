import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import axiosInstance from "../utils/Axios"; // Use 'import' instead of 'require'

const Cart = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(sessionStorage.getItem("gmail"));
  const [length, setLength] = useState(0);

  //To update gmail value from sessionStorage
  useEffect(() => {
    setEmail(sessionStorage.getItem("gmail"))
  }, [sessionStorage.getItem("gmail")])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post("http://localhost:3000/user/cart",
          { email },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        setData(response.data.bookDetails);
        console.log(response.data);
        setLength(response.data.numberOfBooks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
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

export default Cart
