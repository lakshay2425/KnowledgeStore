import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../Forms/form.css";
import { useNavigate, useLocation } from 'react-router-dom';


const Update = () => {
    const [details, setDetails] = useState({
        author: "",
        genre: "",
        price: "",
        Quantity: "",
        book_name: "",
        img_link: ''
      });
    const [isLoaded, setIsLoaded] = useState(false); // Track if data is loaded
    const location = useLocation();
    const { state } = location;
    const bookName = state.data;
    const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async () => {
        // if(!isLoaded){
            try {
                const apiUrl = `http://localhost:3000/search/${bookName}`;
                const response = await axios.get(apiUrl);
                if(response.status == 200){
                    console.log(response.data.message);
                    setDetails(response.data.result[0]);
                    setIsLoaded(true); // Mark as loaded
                }else{
                    console.log(response.data.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        // }
    };
    fetchData();
}, [bookName, isLoaded]);


  //To handle inputs in the form
  const handleInputChange = (e) => {
    setDetails((currData) => {
      return{
        ...currData, [e.target.name] : e.target.value
      }
    })
  };


  //To handle form submission
  const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const response = await axios.put(`http://localhost:3000/admin/update/${bookName}`, details,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        const result = response.data.result;
        console.log(result, response.data.message);
        setDetails({
            author: "",
            genre: "",
            price: "",
            Quantity: "",
            book_name: "",
            img_link: ''
          });  
          navigate("/Read");
        } catch (error) {
        console.error('Error submitting form:', error.message);
        setDetails({
            author: "",
            genre: "",
            price: "",
            Quantity: "",
            book_name: "",
            img_link: ''
          });  
        }
  }

  return (
    <>
    <div className="container ">
     <form  method="patch"  onSubmit={handleSubmit}>
      <table>
        <tbody>
        <tr>
          <td>
            <label htmlFor="author">Author</label>
          </td>
          <td>
            <input type="text" id='author'  onChange={handleInputChange}  name='author' value={details.author} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="book_name">Book Name</label>
          </td>
          <td>
            <input type="text" id='book_name' name='book_name'  onChange={handleInputChange} value={details.book_name}  required/>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="genre">Genre</label>
          </td>
          <td>
            <input type="text" id='genre'  onChange={handleInputChange}  name='genre' value= {details.genre} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="price">Price</label></td>
          <td>
            <input type="number" id='price' onChange={handleInputChange}  name='price' value= {details.price} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="img_link">Image Link</label>
          </td>
          <td>
            <input type="url" id='img_link'  onChange={handleInputChange}  name='img_link' value= {details.img_link} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="Quantity">Quantity</label></td>
          <td>
            <input name= "Quantity"  id= "Quantity" onChange={handleInputChange}  value= {details.Quantity}/>
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

export default Update;
