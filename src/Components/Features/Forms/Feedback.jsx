import React, { useState } from "react";
import axiosInstance from "../../utils/Axios";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Feedback = () => {

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
        "http://localhost:3000/forms/feedbackDetails",
        details,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const result = response.data;
      console.log(result);
      setDetails({
        username: "",
        gmail: "",
        feedback: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setDetails({
        fullName : '',
        username : '',
        gmail : '',
        number : '',
        address : '',
        password : '',
        cpassword : '',
        gender : ''
        });
    }
  };
  
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
};

export default Feedback;
