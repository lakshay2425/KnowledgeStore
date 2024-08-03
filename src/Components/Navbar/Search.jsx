import React, { useState } from "react";
import axios from "axios";
import { SearchIcon } from "../utils/SearchIcon"; 

const Search = () => {
  // Use useState to manage bookName state
  const [bookName, setBookName] = useState("");

  // Function to handle change in input fields value
  const handleInputChange = (e) => {
    setBookName(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send GET request with bookName as query parameter
      const response = await axios.get(
        `http://localhost:3000/search/${bookName}`,
      {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const result = response.data.result;
      console.log(result); // Handle the result as needed
      // Reset the bookName after search
      setBookName("");
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            type="text"
            name="bookName"
            value={bookName}
            onChange={handleInputChange}
            placeholder="Search For Books!"
            className="w-42 h-10"
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
