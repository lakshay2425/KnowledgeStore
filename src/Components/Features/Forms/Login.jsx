import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [details, setDetails] = useState({
    username: "",
    password: "",
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
      password: "",
    });
    try {
      const response = await axios.post(
        "http://localhost/Programs/Book_rental%20Project/login.php",
        details
      );
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <div className="container">
        <form method="post" onSubmit={handleSubmit}>
          <table>
            <tbody>
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
                    name="password"
                    value={details.password}
                  />
                </td>
              </tr>
              <tr className="submit">
                <td></td>
                <td>
                  <button>Login</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default Contact;
