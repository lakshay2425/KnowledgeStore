import React, {useState} from 'react'
import axios from 'axios';

const Contact = () => {
  const [details, setDetails] = useState({
    username : '',
      gmail : '',
      category : '',
      bookName : ''
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
      category : '',
      bookName : ''
      });
      try {
        const response = await axios.post('http://localhost/Programs/Book_rental%20Project/SuggestionFormData.php', details);
        console.log('Server response:', response.data);
    } catch (error) {
        console.error('Error submitting form:', error);
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
          <td><input type='text' name="Category" id="Category" onChange={handleInputChange} value={details.category} placeholder='Enter the category of book you want to suggest'></input></td>
        </tr>
        <tr>
          <td><label htmlFor="bookName">Book Name</label></td>
          <td><input type='text' name="bookName" id="bookName" onChange={handleInputChange} value={details.bookName} placeholder='Enter the book name'></input></td>
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
