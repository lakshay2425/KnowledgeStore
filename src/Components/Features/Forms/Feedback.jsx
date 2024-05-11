import React, {useState} from 'react'
import axios from 'axios';

const Contact = () => {
  const [details, setDetails] = useState({
    username : '',
    gmail : '',
    feedback : ''
  });
  const handleInputChange = (e) => {
    setDetails((currData) => {
      return{
        ...currData, [e.target.name] : e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDetails({
      username : '',
      gmail : '',
      feedback : ''
      })
      try {
        const response = await axios.post('http://localhost/Programs/Book_rental%20Project/FeedbackData.php', details);
        if(response.status === 200){
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Thank you {details.username}</strong> for submitting feedback
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        }else{
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Feedback not submitted successfully</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        }
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
          <td><label htmlFor="feedback">Feedback</label></td>
          <td><textarea name="feedback" id="feedback" onChange={handleInputChange} cols="30" value={details.feedback} rows="10" placeholder='Enter your feedback in detail'></textarea></td>
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
