import React, {useState} from 'react'
import axios from 'axios';
import "./form.css";

const Contact = () => {
  const [details, setDetails] = useState({
    username: "",
    gmail: "",
    number: "",
    concern: "",
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
        number : '',
       concern : ''
      });
      try {
        const response = await axios.post('http://localhost/Programs/bookRental/ContactFormData.php', details);
        if(response.status === 200){
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Thank you {details.username}</strong> for contacting us
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        }else{
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Sorry, form didn't get submitted</strong> Try again Later
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
          <td><input type="gmailt" id='gmail' onChange={handleInputChange} placeholder='Enter your gmail' name='gmail' value={details.gmail} /></td>
        </tr>
        <tr>
          <td><label htmlFor="contact">Contact Number</label></td>
          <td><input type="number" id='contact' onChange={handleInputChange} placeholder='Enter your contact number' name='number' value={details.number} /></td>
        </tr>
        <tr>
          <td><label htmlFor="concern">Concern</label></td>
          <td><textarea name="concern" id="concern" onChange={handleInputChange} cols="30" placeholder='Enter the reason why you want to contact' value={details.concern} rows="10"></textarea></td>
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
  );
};

export default Contact;
