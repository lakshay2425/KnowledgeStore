import React, { useEffect, useState } from "react";
import ProductCard from "../utils/ProductCard";
import axiosInstance from "../utils/Axios";
import useAlert from "../utils/setAlert";
import { Divider } from "@nextui-org/react";

const Wishlist = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem("gmail"));
  const [length, setLength] = useState(0);
  const { handleError } = useAlert();

  //To update gmail value from localStorage
  useEffect(() => {
    setEmail(localStorage.getItem("gmail"))
  }, [localStorage.getItem("gmail")])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`${import.meta.env.VITE_BACKEND_URL}/wishlist/fetch`,
          { email },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        // console.log(response.data);

        setData(response.data);
        setLength(response.data.length);
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
        <div className="w-[90vw] m-auto p-2">
          <div className='w-full flex pt-12 pb-4 justify-center'>
            <h1 className="text-zinc-800 text-3xl text font-bold ">Your Wishlist</h1>
          </div>
          <Divider className='mb-6' />
          <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-3 mb-10 max-xl:grid-cols-4 max-2xl:grid-cols-4">
            <ProductCard books={data} />
          </div>
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
