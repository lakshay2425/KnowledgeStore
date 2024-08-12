import React, { useState } from "react";
import "./form.css";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaUser,FaLock,FaPen } from "react-icons/fa";
import axiosInstance from "../../utils/Axios";
import {useAlert} from "../../utils/setAlert";


const Contact = () => {
  const { handleSuccess, handleError } = useAlert();

    //Managing state of the form's data 
  const [details, setDetails] = useState({
    username: "",
    gmail: "",
    number: "",
    concern: "",
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

    //Function to handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.post(
        "http://localhost:3000/forms/contactDetails",
        {details},
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
      number: "",
      concern: "",
    });
    } catch (error) {
      console.error("Error submitting form:", error);
      handleError(response.data.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="form-box login">
            <form method="post" onSubmit={handleSubmit}>
                <h1>contact us</h1>
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
                  type="gmailt"
                  id="gmail"
                  onChange={handleInputChange}
                  placeholder="Enter your gmail"
                  name="gmail"
                  value={details.gmail}
                />
                <IoIosMail className="icon"/>
              </div>
              <div className="input-box">
                <input
                  type="number"
                  id="contact"
                  onChange={handleInputChange}
                  placeholder="Enter your contact number"
                  name="number"
                  value={details.number}
                />
                <FaPhone className="icon"/>
              </div>
              <div className="text">
                <textarea
                  name="concern"
                  id="concern"
                  onChange={handleInputChange}
                  cols="33"
                  placeholder="Enter the reason why you want to contact"
                  value={details.concern}
                  rows="5"
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
