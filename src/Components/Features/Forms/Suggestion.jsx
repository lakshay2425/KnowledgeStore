import React, { useState } from "react";
import axiosInstance from "../../utils/Axios"
import { FaUser,FaLock,FaPen } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import {useAlert} from "../../utils/setAlert";
//import { clearAlert } from "../../../../Store/store";



const Suggestion = () => {

  const [details, setDetails] = useState({
    username: "",
    gmail: "",
    genre: "",
    bookName: "",
    author: "",
  });

  const handleInputChange = (e) => {
    setDetails((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.post(
        "http://localhost:3000/forms/suggestionDetails",
        details,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const result = response.data;
      console.log(result);
      handleSuccess(response.data.message);
      setDetails({
        username: "",
        gmail: "",
        genre: "",
        bookName: "",
        author: "",
      });
      console.log(response);
    } catch (error) {
      handleError(error.message);
      console.log(error);
      setDetails({
        username: "",
        gmail: "",
        genre: "",
        bookName: "",
        author: "",
      });
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 w-full px-[5vw] py-6 pt-14 justify-between max-md:grid-cols-1">
        <div className="max-w-96  pt-16 max-md:pt-0">
          <div className="flex-col space-y-4 max-md:">
            <h2 className="font-bold text-5xl leading-tight">Help Us Improve</h2>
            <p className="text-lg">We welcome your ideas and suggestions. Please use the form below to let us know how we can enhance your experience.

</p>
          </div>
        </div>
        <div className="col-start-2 justify-self-end p-16  rounded-large max-md:col-start-1 , max-md:p-4 max-md:justify-self-auto ">
            <form method="post" onSubmit={handleSubmit} className="flex-col space-y-4">
            <div className="">
              <p className="py-2">Username</p>
              <div className=" flex items-center space-x-2 ">
              <input  className="w-96 p-2 rounded-lg bg-slate-100 border-medium"
                type="text"
                id="username"
                onChange={handleInputChange}
                placeholder="Enter your username"
                name="username"
                value={details.username}
                />
                <FaUser className="icon"/>
                </div>
                </div>
                <div className="">
              <p className="py-2">Gmail</p>
              <div className=" flex items-center space-x-2 ">
              <input  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                type="gmail"
                id="gmail"
                onChange={handleInputChange}
                placeholder="Enter your gmail"
                name="gmail"
                value={details.gmail}
              />
              <IoIosMail className="icon"/>
              </div>
              </div>
              <div className="">
              <p className="py-2">Genre</p>
              <div className=" flex items-center space-x-2 ">

              <input  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                type="text"
                name="genre"
                id="Category"
                onChange={handleInputChange}
                value={details.category}
                placeholder="Enter the genre of book"
                ></input>
              <IoIosMail className="icon"/>
                </div>
                </div>
                <div className="">
              <p className="py-2">Book Name</p>
              <div className=" flex items-center space-x-2 ">

              <input  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                type="text"
                name="bookName"
                id="bookName"
                onChange={handleInputChange}
                value={details.bookName}
                placeholder="Enter the book name"
                ></input>
                </div>
                </div>
                <div className="">
              <p className="py-2">Author Name</p>
              <div className=" flex items-center space-x-2 ">
              <input  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                type="text"
                id="author"
                onChange={handleInputChange}
                placeholder="Enter the author name"
                name="author"
                value={details.author}
              />
              <FaPen className="icon"/>
              </div>
              </div>
              <button type="submit" className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950 hover:scale-110 hover:border-medium">Send Feedback</button>
          </form>
        </div>
        <div  className="col-span-2 h-80 shadow-inner drop-shadow-2xl rounded-2xl bg-[url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <img className="cover" src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Suggestion;
