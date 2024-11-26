import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/Axios"; // Use 'import' instead of 'require'
import { useAlert } from "../utils/setAlert";
import { Button } from "@nextui-org/react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
const Cart = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem("gmail"));
  const [length, setLength] = useState(0);
  const { handleError } = useAlert();
  let [tQty, setTQty] = useState(0)
  let [totalPrice, setTotalPrice] = useState(0)
  let [totalDiscount, setTotalDiscount] = useState(0)
  //To update gmail value from localStorage
  useEffect(() => {
    setEmail(localStorage.getItem("gmail"))
  }, [localStorage.getItem("gmail")])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post(`${import.meta.env.VITE_BACKEND_URL}/user/cart`,
          { email },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        if (response.data.bookDetails.length > 0) {
          setData(response.data.bookDetails);
          //console.log(response.data);
          setLength(response.data.numberOfBooks);
        }else{
          setLength(0);
        };
      } catch (error) {
        console.error('Error fetching data:', error);
        if(error.response.status === 429) {
          handleError('Rate limit exceeded. Please try again later.');
        }
      }
    };
    fetchData();
  }, [data]);

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
  async function deleteBookFromCart(bookName) {
    const removeBookResponse = await axiosInstance.delete(
      `${import.meta.env.VITE_BACKEND_URL}/user/${bookName}/cart/delete`,
      { data: { email } }, // Wrap email in an object and use the 'data' property
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const response = removeBookResponse.data.success;
    console.log(response);
    if (response) {
      handleSuccess("Book removed successfully from the cart");
      const updatedCart = data.filter(item => item.title !== bookName);
      console.log(updatedCart);
      setData(updatedCart);
      setLength(length - 1);
    } else {
      console.log('Error deleting book from cart');
      handleError("Error deleting book from cart");
    };
  };

  const moveBookToWishlist = async (bookName) => {
    const removeBookResponse = await axiosInstance.post(
      `${import.meta.env.VITE_BACKEND_URL}/user/moveToWishlist`,
      { data: { email, bookName } }, // Wrap email in an object and use the 'data' property
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(removeBookResponse);
    // const response = removeBookResponse.response.data.success;
    // console.log(response);
    // if (response) {
    //   handleSuccess("Book moved successfully to the wishlist");
    //   const updatedCart = data.filter(item => item.bookName !== bookName);
    //   setData(updatedCart);
    // } else {
    //   console.log('Error, book not moved to the wishlist');
    //   handleError("Error, book moved  to the wishlist, Try again later");
    // }
  }
  return (
    <div className="cart-container m-40 h-auto p-6 bg-gray-100">
      <div className="Top-bar flex justify-between">
        <h2 className="text-2xl font-medium pl-2">Shopping Cart</h2>
        <button className="text-red-400 underline" disabled= {length === 0}>Remove All</button>
      </div>
      {length > 0 ? data.map((item, index) => (
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
            <button className="text-cyan-500 underline" onClick={() => { moveBookToWishlist(item.title) }}>Save to Wishlist</button>
            <button className="text-red-500 underline" onClick={() => { deleteBookFromCart(item.title) }}>Remove</button>
          </div>

        </div>

      ))}
      <div className="flex-col my-6 space-y-2 p-4 bg-slate-200 rounded-medium">
        <div className="flex gap-6">
          <h2 className="text-2xl font-bold">Subtotal : </h2>
          <p className="text-xl font-semibold">₹ {totalPrice}</p>
        </div>
        <div className="flex gap-6">
          <h3 className="text-xl font-bold">Discount : </h3>
          <p className="text-xl font-semibold">₹ {totalDiscount}</p>
        </div>
        <Button>Proceede to Buy ( {tQty} ) items</Button>

      </div>
    </div>
  );
};

export default Cart
