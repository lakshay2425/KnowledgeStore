import React, {useState} from 'react';
import "./create.css";
import axiosInstance from "../../utils/Axios";
import {useAlert} from "../../utils/setAlert";


const Create = () => {
  const { handleSuccess, handleError } = useAlert();

  const [details, setDetails] = useState({
    author: "",
    genre: "",
    price: "",
    quantity: "",
    book_name: "",
    img_link: ''
  });

  //To handle inputs in the form
  const handleInputChange = (e) => {
    setDetails((currData) => {
      return{
        ...currData, [e.target.name] : e.target.value
      }
    })
  }
  //To handle form submission
  const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const response = await axiosInstance.post('http://localhost:3000/admin/create', details,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        const result = response.data.result;
        handleSuccess("Book Data inserted successfully");
        setDetails({
          author: "",
          genre: "",
          price: "",
          quantity: "",
          book_name: "",
          img_link: ''
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        handleError("Failed to insert book data");
        setDetails({
          author: "",
          genre: "",
          price: "",
          quantity: "",
          book_name: "",
          img_link: ''
        });
    }
  }

  return (
    <>
    <div className="container ">
     <form  method="post"  onSubmit={handleSubmit}>
      <table>
        <tbody>
        <tr>
          <td>
            <label htmlFor="author">Author</label>
          </td>
          <td>
            <input type="text" id='author'  onChange={handleInputChange} placeholder='Enter the author name' name='author' value={details.author} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="book_name">Book Name</label>
          </td>
          <td>
            <input type="text" id='book_name' name='book_name'  onChange={handleInputChange} value={details.book_name} placeholder='Enter the book name' required/>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="genre">Genre</label>
          </td>
          <td>
            <input type="text" id='genre'  onChange={handleInputChange} placeholder='Enter the book genre' name='genre' value={details.genre} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="price">Price</label></td>
          <td>
            <input type="number" id='price' onChange={handleInputChange} placeholder='Enter the book price' name='price' value={details.price} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="img_link">Image Link</label>
          </td>
          <td>
            <input type="url" id='img_link'  onChange={handleInputChange} placeholder='Enter the image link' name='img_link' value={details.img_link} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="quantity">Quantity</label></td>
          <td>
            <input name="quantity" placeholder='Enter quantity of the book' id="quantity" onChange={handleInputChange}  value={details.quantity}/>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button>Submit</button>
          </td>
        </tr>
        </tbody>
      </table>
      </form> 
      </div>
    </>
  );
};

export default Create;
