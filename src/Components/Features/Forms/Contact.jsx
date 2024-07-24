import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
// import { FaUser,FaLock,FaPen } from "react-icons/fa";

const Contact = () => {
  const [details, setDetails] = useState({
    username: "",
    gmail: "",
    number: "",
    concern: "",
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
      number: "",
      concern: "",
    });
    try {
      const response = await axios.post(
        "http://localhost/forms/contactDetails",
        details
      );
      if (response.status === 200) {
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Thank you {details.username}</strong> for contacting us
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>;
      } else {
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Sorry, form didn't get submitted</strong> Try again Later
          <button
            type="button"
            class="btn-close"
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
