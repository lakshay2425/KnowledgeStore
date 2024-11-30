import React, { useState } from "react";
import axiosInstance from "../../utils/Axios";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import useAlert  from "../../utils/setAlert";

const Feedback = () => {
  const { handleSuccess, handleError } = useAlert();

  //Managing state of the form's data 
  const [details, setDetails] = useState({
    username: "",
    gmail: "",
    feedback: "",
  });

  //Function to handle change in input fields value
  const handleInputChange = (e) => {
    setDetails((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  //FUnction to handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_BACKEND_URL}/forms/feedbackDetails`,
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
        feedback: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response.status === 429) {
        handleError('Rate limit exceeded. Please try again later.');
      } else {
        handleError(response.data.message);
      }
      setTimeout(() => {
        clearAlert();
      }, 3000)
      setDetails({
        fullName: '',
        username: '',
        gmail: '',
        number: '',
        address: '',
        password: '',
        cpassword: '',
        gender: ''
      });
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 w-full px-[5vw] py-6 pt-14 justify-between max-md:grid-cols-1">
        <div className="max-w-96  pt-16 max-md:pt-0">
          <div className="flex-col space-y-4 max-md:">
            <h2 className="font-bold text-5xl leading-tight">Your feedback helps us to improve</h2>
            <p className="text-lg">We are here to help you and we'd love to connect with you.</p>
          </div>
        </div>
        <div className="col-start-2 justify-self-end p-16  rounded-large max-md:col-start-1 , max-md:p-4 max-md:justify-self-auto ">
          <form method="post" onSubmit={handleSubmit} className="flex-col space-y-4">

            <div className="">
              <p className="py-2">Name</p>
              <div className=" flex items-center space-x-2 ">
                <input
                  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="text"
                  id="username"
                  autoComplete="name"
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  name="username"
                  value={details.username}
                />
                <FaUser className="icon" />
              </div>
            </div>

            <div>
              <p className="py-2">Email</p>
              <div className="flex items-center space-x-2">
                <input
                  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="email"
                  id="gmail"
                  autoComplete="email"
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  name="gmail"
                  value={details.gmail}
                />
                <IoIosMail className="icon" />
              </div>
            </div>


            <div>
              <p className="py-2">Phone Number</p>
              <div className="flex items-center space-x-2">
                <input type="number" name="number" id="number" autoComplete="number" placeholder="Enter your number" className="w-full p-2 rounded-lg bg-slate-100 border-medium" />
              </div>
            </div>

            <div>
              <p className="py-2">Message</p>
              <div className="flex items-center space-x-2">
                <textarea
                  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  name="feedback"
                  id="feedback"
                  autoComplete="off"
                  onChange={handleInputChange}
                  cols="33"
                  value={details.feedback}
                  rows="5"
                  placeholder="Enter your feedback in detail"
                >
                </textarea>

              </div>
            </div>

            <button type="submit" className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950 hover:scale-110 hover:border-medium">Send Feedback</button>
          </form>
        </div>
        <div className="col-span-2 h-80 shadow-inner drop-shadow-2xl rounded-2xl bg-[url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <img className="cover" src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Feedback;
