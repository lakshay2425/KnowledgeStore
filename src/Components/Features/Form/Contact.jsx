// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./form.css";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({
      username: "",
      gmail: "",
      number: "",
      concern: "",
    });
  };
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <table className="whole">
          <tr>
            <td>
              <label htmlFor="username">Username</label>
            </td>
            <td>
              <input
                type="text"
                id="username"
                onChange={handleInputChange}
                placeholder="Enter your username"
                name="username"
                value={details.username}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="gmail">Gmail</label>
            </td>
            <td>
              <input
                type="gmailt"
                id="gmail"
                onChange={handleInputChange}
                placeholder="Enter your gmail"
                name="gmail"
                value={details.gmail}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="contact">Contact Number</label>
            </td>
            <td>
              <input
                type="number"
                id="contact"
                onChange={handleInputChange}
                placeholder="Enter your contact number"
                name="number"
                value={details.number}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="concern">Concern</label>
            </td>
            <td>
              <textarea
                name="concern"
                id="concern"
                onChange={handleInputChange}
                cols="30"
                value={details.concern}
                rows="10"
              ></textarea>
            </td>
          </tr>
          <tr className="submit">
            <td></td>
            <td>
              <button className="submit">Submit</button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default Contact;
