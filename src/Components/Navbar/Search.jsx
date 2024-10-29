import React, { useState } from "react";
import axiosInstance from "../utils/Axios";
import { SearchIcon } from "../utils/SearchIcon";
import { Input } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  // Use useState to manage bookName state
  const [bookName, setBookName] = useState("");
  const navigate = useNavigate();

  // Function to handle change in input fields value
  const handleInputChange = (e) => {
    setBookName(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send GET request with bookName as query parameter
      const response = await axiosInstance.get(
        `http://localhost:3000/search/${bookName}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data.found) {
        const result = response.data.bookDetails;
        console.log(result); 
        navigate('/SearchResult', { state: { book: result } });
        // Handle the result as needed
      }else{
        console.log("Book not found");
      }

      // Reset the bookName after search
      setBookName("");
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="search flex bg-transparent">
          <Input
            variant="underlined"
            radius="lg"
            type="search"
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
