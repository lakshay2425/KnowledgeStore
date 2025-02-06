import { useState } from "react";
import axiosInstance from "../../utils/Axios";
import useAlert from "../../utils/setAlert";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBookInfo } from "../../../../features/bookDetailsSlice";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSuccess, handleError } = useAlert();

  const [details, setDetails] = useState({
    author: "",
    genre: "",
    price: "",
    quantity: "",
    book_name: "",
    img_link: "",
    type: "",
  });

  //To handle inputs in the form
  const handleInputChange = (e) => {
    setDetails((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  let books = useSelector((state) => state.book?.booksInfo || []);

  //To handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance
      .post(`${import.meta.env.VITE_BACKEND_URL}/admin/create`, details, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        handleSuccess("Book Data inserted successfully");
        books.push(details);
        dispatch(updateBookInfo(books));
        setDetails({
          author: "",
          genre: "",
          price: "",
          quantity: "",
          book_name: "",
          img_link: "",
          type: "",
        });
        navigate("/Admin/Read");
      })
      .catch(() => {
        handleError("Failed to insert book data");
        setDetails({
          author: "",
          genre: "",
          price: "",
          quantity: "",
          book_name: "",
          img_link: "",
          type: "",
        });
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <form
          className="w-96 bg-white p-6 rounded-lg shadow-large space-y-4 "
          method="post"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="author"
            >
              Author
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="author"
              autoComplete="off"
              onChange={handleInputChange}
              placeholder="Enter the author name"
              name="author"
              value={details.author}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="book_name"
            >
              Book Name
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="book_name"
              name="book_name"
              autoComplete="off"
              onChange={handleInputChange}
              value={details.book_name}
              placeholder="Enter the book name"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="genre"
            >
              Genre
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="genre"
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Enter the book genre"
              name="genre"
              value={details.genre}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="type"
            >
              {" "}
              Type{" "}
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="type"
              onChange={handleInputChange}
              name="type"
              value={details.type}
              placeholder="Enter the book type"
              autoComplete="off"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="price"
            >
              Price
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              id="price"
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Enter the book price"
              name="price"
              value={details.price}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="img_link"
            >
              Image Link
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="url"
              id="img_link"
              onChange={handleInputChange}
              autoComplete="off"
              placeholder="Enter the image link"
              name="img_link"
              value={details.img_link}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="quantity"
            >
              Quantity
            </label>

            <input
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="quantity"
              placeholder="Enter quantity of the book"
              autoComplete="on"
              id="quantity"
              onChange={handleInputChange}
              value={details.quantity}
            />
          </div>

          <Button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Create;
