import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import axiosInstance from "../utils/Axios"; // Use 'import' instead of 'require'

import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
const Cart = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem("gmail"));
  const [length, setLength] = useState(0);

  //To update gmail value from localStorage
  useEffect(() => {
    setEmail(localStorage.getItem("gmail"))
  }, [localStorage.getItem("gmail")])

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
        //console.log(response.data);
        setLength(response.data.numberOfBooks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Function to handle increase quantity
  const handleIncreaseQuantity = (index) => {
    const updatedCart = data.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setData(updatedCart);
  };

  // Function to handle decrease quantity
  const handleDecreaseQuantity = (index) => {
    const updatedCart = data.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setData(updatedCart);
  };
  return (
    <div className="cart-container m-40 h-auto p-6 bg-gray-100">
      <div className="Top-bar flex justify-between">
        <h2 className="text-2xl font-medium pl-2">Shopping Cart</h2>
        <button className="text-red-400 underline">Remove All</button>
      </div>

      {data.map((item, index) => (
        <div key={index} className="Product-Cart-Section mx-5 my-10 flex justify-between">
          <img className="w-24 h-36 aspect-[4/3]" src={item.imageLink} alt={item.title} />

          <p className="text-4xl font-semibold text-center pt-7">{item.title}</p>

          <div className="Quantity flex justify-center items-center">
            <FaCircleMinus
              className="text-4xl text-black-900 border-[1px] border-black text-slate-300 bg-[#1e1c1c] rounded-full cursor-pointer"
              onClick={() => handleDecreaseQuantity(index)}
            />
            <p className="px-4 text-2xl text-gray-500">{item.quantity}</p>
            <FaCirclePlus
              className="text-4xl text-black-900 border-[1px] border-black text-slate-300 bg-[#1e1c1c] rounded-full cursor-pointer"
              onClick={() => handleIncreaseQuantity(index)}
            />
          </div>
 
          <div className="Price flex flex-col items-end">
            <p className="text-3xl font-bold">$ {(item.price * item.quantity).toFixed(2)}</p>
             {/* yha pe price bhi update hora h  */}

            <button className="text-cyan-500 underline">Save for later</button>
            <button className="text-red-500 underline">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart
