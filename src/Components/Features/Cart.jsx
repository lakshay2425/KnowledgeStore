import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/Axios"; // Use 'import' instead of 'require'
import useAlert  from "../utils/setAlert";
import { Button, ButtonGroup, Spacer } from "@nextui-org/react";
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
        const response = await axiosInstance.get(`${import.meta.env.VITE_BACKEND_URL}/cart/fetch`,
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
        } else {
          setLength(0);
        }
      } catch (error) {
        // console.error('Error fetching data:', error);
        // if (error.response.status === 429) {
        //   handleError('Rate limit exceeded. Please try again later.');
        // }
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
  async function deleteBookFromCart(bookName) {
    const removeBookResponse = await axiosInstance.delete(
      `${import.meta.env.VITE_BACKEND_URL}/cart/${bookName}/delete`,
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
      `${import.meta.env.VITE_BACKEND_URL}/wishlist/moveToWishlist`,
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
    <div className="w-[90vw] min-h-screen m-auto my-10 h-auto p-6 bg-gray-100 rounded-2xl">
      <div className="Top-bar flex justify-between">
        <h2 className="text-2xl font-medium pl-2">Shopping Cart</h2>
        <Button color="danger" className="text-zinc-100 " disabled={length === 0}>Remove All</Button>
      </div>
      <div className="grid auto-rows-max grid-cols-11 grid-flow-row-dense">
        {
          length > 0 ? data.map((item, index) => (
            <div key={index} className=" col-span-8 mx-5 my-10 grid grid-flow-col grid-cols-8 auto-rows-fr,
        max-md:grid-rows-3 max-md:grid-flow-row-dense">
              <img className="w-24 h-36 col-span-2 aspect-[4/3] max-md:col-span-3 max-md:row-span-2 max-md:order-first max-md:" src={item.imageLink} alt={item.title} />
              <p className="text-4xl col-span-4 font-semibold text-left m-2 pt-7 ,
          max-xl:text-3xl max-md:text-xl max-sm:text-[1.4rem] , max-md:p-1 max-md:col-span-5 max-md:row-span-1">{item.title}</p>

              <div className="Quantity flex justify-center col-span-3 items-center , max-md:col-span-3 max-md:order-4 max-md:justify-start">
                <FaCircleMinus
                  className="flex items-center text-slate-400 justify-center rounded-full  w-8 h-8 shadow-xl backdrop-blur-lg transition ease-in-out hover:scale-105 duration-300 cursor-pointer ,
              max-xl:text-3xl max-md:text-xl"
                  onClick={() => handleDecreaseQuantity(index)}
                />
                <p className="px-4 text-2xl text-gray-500 max-xl:text-xl max-md:text-xl">{item.quantity}</p>
                <FaCirclePlus
                  className="flex items-center text-slate-400 justify-center rounded-full  w-8 h-8 shadow-xl backdrop-blur-lg transition ease-in-out hover:scale-105 duration-300 cursor-pointer ,
              max-xl:text-3xl max-md:text-xl"
                  onClick={() => handleIncreaseQuantity(index)}
                />
              </div>

              <div className="px-2 gap-4 col-span-2 flex flex-col items-end max-md:col-span-5 max-md:row-span-1 max-md:items-start">
                <p className="text-3xl font-bold max-xl:text-2xl max-md:text-xl">₹ {(item.price * item.quantity).toFixed(2)}</p>
                <ButtonGroup className="">

                  <Button variant="flat" className="text-cyan-500" onClick={() => { moveBookToWishlist(item.title) }}>Save to Wishlist</Button>
                  <Spacer></Spacer>
                  <Button variant='flat' className="text-red-500 " onClick={() => { deleteBookFromCart(item.title) }}>Remove</Button>
                </ButtonGroup>
              </div>

            </div>

          )) : <p className="col-span-8 text-2xl text-center pt-10">Your cart is empty</p>
        }
        <div className=" flex-col my-6 space-y-2 p-4 bg-slate-200 rounded-medium col-span-3 , max-md:col-span-full" >
          <div className="flex gap-6">
            <h2 className="text-2xl font-bold">Subtotal : </h2>
            <p className="text-xl font-semibold">₹ {totalPrice}</p>
          </div>
          <div className="flex gap-6">
           
          </div>
          <Button className="w-full">Proceede to Buy ( {tQty} ) items</Button>

        </div>
      </div>


    </div>
  )
}

export default Cart;
