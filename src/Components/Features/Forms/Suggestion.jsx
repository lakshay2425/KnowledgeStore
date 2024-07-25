import React, { useState } from "react";
import axios from "axios";
import { FaUser,FaLock,FaPen } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

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
      const response = await axios.post(
        "http://localhost/forms/suggestionDetails",
        details,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setDetails({
        username: "",
        gmail: "",
        genre: "",
        bookName: "",
        author: "",
      });
  
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="form-box login">
            <form method="post" onSubmit={handleSubmit}>
              <h1>suggestion</h1>
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
              <div className="input-box">

              <input
                type="text"
                name="genre"
                id="Category"
                onChange={handleInputChange}
                value={details.category}
                placeholder="Enter the genre of book"
                ></input>
              <IoIosMail className="icon"/>
                </div>
                <div className="input-box">

              <input
                type="text"
                name="bookName"
                id="bookName"
                onChange={handleInputChange}
                value={details.bookName}
                placeholder="Enter the book name"
                ></input>
                </div>
                <div className="input-box">
              <input
                type="text"
                id="author"
                onChange={handleInputChange}
                placeholder="Enter the author name"
                name="author"
                value={details.author}
              />
              <FaPen className="icon"/>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggestion;
