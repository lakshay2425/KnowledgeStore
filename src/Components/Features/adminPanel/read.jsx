import React, { useEffect, useState } from 'react';
import axiosInstance from "../../utils/Axios"
import "./table.css";
import { useNavigate } from 'react-router-dom';
import {useAlert} from "../../utils/setAlert";


const Read = () => {
    const { handleSuccess, handleError } = useAlert();
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); // Track if data is loaded
    const navigate = useNavigate();


    useEffect(() => {
        const fetchBooks = async () => {
          if (books.length === 0 && !isLoaded) { // Check if books data already exists
            try {
                const apiUrl = "http://localhost:3000/books";
                const response = await axiosInstance.get(apiUrl);
                if(response.status == 200){
                    setBooks(response.data);
                    console.log(response.data);
                    setIsLoaded(true); // Mark as loaded
                }else{
                    console.log(response.data);
                }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
        };
    
        fetchBooks();
      }, [books, isLoaded]); // Depend on books and isLoaded
    
    //Function to turncate the string if string exceeds the length limit
    function truncateString(str) {
        if (str.length > 10) {
                return str.slice(0, 20) + "...";
        }
        return str;
    };  

    const handleDelete = async (title) => {
        const apiUrl = `http://localhost:3000/admin/delete/${title}`;
        try {
            const response = await axiosInstance.delete(apiUrl);
            if(response.status === 200){
                const result = response.data.message
                handleSuccess(result);
                setBooks((prevBooks) => prevBooks.filter((book) => book.title !== title));
            }else{
                const result = response.data.message
                handleError(result);
            }          
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }
    const handleEdit = async (book_name) => {
        const url = "/Update";
        navigate(url, {state : {data : book_name}});
    };


  return (
    <>
    <div>
    <table>
        <thead>
            <tr>
                <th>Book Name</th>
                <th>Book Price</th>
                <th>Book Author</th>
                <th>Book Genre</th>
                <th>Book Image Link</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {books.map((book) => (
            <tr key={book._id}>
                <td>{book.title}</td>
                <td>&#8377;{book.price}</td>
                <td>{book.author}</td>
                <td>{book.genres}</td>
                <td>{truncateString(book.imageLink)}</td>
                <td><button onClick={() => handleEdit(book.title)}>Edit</button></td>
                <td><button onClick={() => handleDelete(book.title)}>Delete</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
    </>
  )
}

export default Read;
