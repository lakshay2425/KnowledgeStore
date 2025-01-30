import  { useState } from "react";
import axiosInstance from "../utils/Axios";
import SearchIcon  from "../utils/SearchIcon";
import { Input } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import useAlert from "../utils/setAlert";

const Search = () => {
  // Use useState to manage bookName state
  const [bookName, setBookName] = useState("");
  const navigate = useNavigate();
  
  const { handleError } = useAlert();

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
        `${import.meta.env.VITE_BACKEND_URL}/search/${bookName}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data.success === true) {
        const result = response.data.data;
        navigate('/SearchResult', { state: { book: result } });
      } else if (response.data.success === false) {
        //handleError(response.data.message);
      }
      // Reset the bookName after search
      setBookName("");
    } catch (error) {
      handleError("Failed to search for book");
      setBookName("");
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
