import React, { useState } from "react";
import "./form.css";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({
      username: "",
      password: "",
    });
  };
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <table>
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
              <label htmlFor="pass">Password</label>
            </td>
            <td>
              <input
                type="password"
                id="pass"
                onChange={handleInputChange}
                placeholder="Enter your password"
                name="pass"
                value={details.password}
              />
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
