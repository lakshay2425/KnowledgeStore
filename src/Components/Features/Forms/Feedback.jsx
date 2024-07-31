import React, { useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
  const [details, setDetails] = useState({
    username: "",
    gmail: "",
    feedback: "",
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
    e.preventDefault();
    setDetails({
      username: "",
      gmail: "",
      feedback: "",
    });
    try {
      const response = await axios.post(
        "http://localhost/Programs/BookRental/FeedbackData.php",
        details
      );
      if (response.status === 200) {
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Thank you {details.username}</strong> for submitting feedback
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>;
      } else {
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Feedback not submitted successfully</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      {/*  /*<div className="container">
        <div className="wrapper">
          <div className="form-box login">
            <form method="post" onSubmit={handleSubmit}>
              <h1>feedback</h1>
              <div className="input-box">
                <input
                  type="text"
                  id="username"
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  name="username"
                  value={details.username}
                />
                <FaUser className="icon"/>
              </div>
              <div className="input-box">
                <input
                  type="gmail"
                  id="gmail"
                  onChange={handleInputChange}
                  placeholder="Enter your gmail"
                  name="gmail"
                  value={details.gmail}
                />
                <IoIosMail className="icon"/>
              </div>
              <div className="text">
                <textarea
                  name="feedback"
                  id="feedback"
                  onChange={handleInputChange}
                  cols="33"
                  value={details.feedback}
                  rows="5"
                  placeholder="Enter your feedback in detail"
                ></textarea>

              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
       </div> */}
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
                <input type="number" name="" id="" placeholder="Enter your number" className="w-full p-2 rounded-lg bg-slate-100 border-medium" />
              </div>
            </div>

            <div>
              <p className="py-2">Message</p>
              <div className="flex items-center space-x-2">
                <textarea
                  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  name="feedback"
                  id="feedback"
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
        <div  className="col-span-2 h-80 shadow-inner drop-shadow-2xl rounded-2xl bg-[url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <img className="cover" src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
