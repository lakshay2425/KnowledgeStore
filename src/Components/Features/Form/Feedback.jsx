import React, {useState} from 'react'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({
      username : '',
      gmail : '',
      feedback : ''
      })
  }
  return (
    <>
     <form method="post" onSubmit={handleSubmit}>
      <table>
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
          <td><textarea name="feedback" id="feedback" onChange={handleInputChange} cols="30" value={details.feedback} rows="10"></textarea></td>
        </tr>
        <tr>
          <td></td>
          <td><button>Submit</button></td>
        </tr>
      </table>
      </form> 
    </>
  )
}

export default Contact
