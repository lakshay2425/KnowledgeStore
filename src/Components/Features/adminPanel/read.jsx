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
                    setBooks(response.data.result);
                    console.log(response.data.message);
                    setIsLoaded(true); // Mark as loaded
                }else{
                    console.log(response.data.message);
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

    const handleDelete = async (book_name) => {
        const apiUrl = `http://localhost:3000/admin/delete/${book_name}`;
        try {
            const response = await axiosInstance.delete(apiUrl);
            if(response.status === 200){
                const result = response.data.message
                handleSuccess(result);
                setBooks((prevBooks) => prevBooks.filter((book) => book.book_name !== book_name));
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
            <tr key={book.s_no}>
                <td>{book.book_name}</td>
                <td>&#8377;{book.price}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{truncateString(book.img_link)}</td>
                <td><button onClick={() => handleEdit(book.book_name)}>Edit</button></td>
                <td><button onClick={() => handleDelete(book.book_name)}>Delete</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
    </>
  )
}

export default Read;
