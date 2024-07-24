import React, { useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Feedback = () => {
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
        "http://localhost/forms/feedbackDetails",
        details
      );
      if (response.status === 200) {
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Thank you {details.username}</strong> for submitting feedback
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
          <strong>Feedback not submitted successfully</strong>
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
