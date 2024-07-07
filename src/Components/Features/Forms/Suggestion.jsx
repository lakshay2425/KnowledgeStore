import React, {useState} from 'react'
import axios from 'axios';

const Contact = () => {
  const [details, setDetails] = useState({
    username : '',
      gmail : '',
      genre : '',
      bookName : '',
      author : ''
    });
  const handleInputChange = (e) => {
    setDetails((currData) => {
      return{
        ...currData, [e.target.name] : e.target.value
      }
    })
  }
  const handleSubmit =  async (e) => {
    e.preventDefault();
    setDetails({
      username : '',
      gmail : '',
      genre : '',
      bookName : '',
      author : ''
      });
      try {
        const response = await axios.post('http://localhost/Programs/BookRental/SuggestionFormData.php', details);
        console.log(response);
        if(response.status=== 200){
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Thank you {details.username}</strong>for your suggestion
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        }else{
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Suggestion not submitted.</strong>Try again later.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        }
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
    <div className="container">
     <form method="post" onSubmit={handleSubmit}>
      <table>
        <tbody>
        <tr>
          <td><label htmlFor="username">Username</label></td>
          <td><input type="text" id='username'  onChange={handleInputChange} placeholder='Enter your username' name='username' value={details.username} /></td>
        </tr>
        <tr>
          <td><label htmlFor="gmail">Gmail</label></td>
          <td><input type="gmail" id='gmail' onChange={handleInputChange} placeholder='Enter your gmail' name='gmail' value={details.gmail} /></td>
        </tr>
        <tr>
          <td><label htmlFor="Category">Category</label></td>
          <td><input type='text' name="genre" id="Category" onChange={handleInputChange} value={details.category} placeholder='Enter the genre of book'></input></td>
        </tr>
        <tr>
          <td><label htmlFor="bookName">Book Name</label></td>
          <td><input type='text' name="bookName" id="bookName" onChange={handleInputChange} value={details.bookName} placeholder='Enter the book name'></input></td>
        </tr>
        <tr>
          <td><label htmlFor="author">Author</label></td>
          <td><input type="text" id='author' onChange={handleInputChange} placeholder='Enter the author name' name='author' value={details.author} /></td>
        </tr>
        <tr>
          <td></td>
          <td><button>Submit</button></td>
        </tr>
        </tbody>
      </table>
      </form> 
      </div>
    </>
  )
}

export default Contact
