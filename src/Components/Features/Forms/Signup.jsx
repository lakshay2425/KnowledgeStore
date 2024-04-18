import React, {useState} from 'react'

const Contact = () => {
  const [details, setDetails] = useState({
    fullName : '',
    gmail : '',
    username : '',
    number : '',
    address : '',
    password : '',
    cpassword : '',
    gender : ''
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
      fullName : '',
      username : '',
      gmail : '',
      number : '',
      address : '',
      password : '',
      cpassword : '',
      gender : ''
      })
  }
  return (
    <>
     <form  method="post" onSubmit={handleSubmit}>
      <table>
        <tr>
          <td>
            <label htmlFor="fullname">Full Name</label>
          </td>
          <td>
            <input type="text" id='fullname'  onChange={handleInputChange} placeholder='Enter your full name' name='full_name' value={details.fullName} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="Username">Username</label>
          </td>
          <td>
            <input type="text" id='Username'  onChange={handleInputChange} placeholder='Enter your user name' name='username' value={details.username} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="gmail">Gmail</label>
          </td>
          <td>
            <input type="gmail" id='gmail' onChange={handleInputChange} placeholder='Enter your gmail' name='gmail' value={details.gmail} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="contact">Contact Number</label></td>
          <td>
            <input type="number" id='contact' onChange={handleInputChange} placeholder='Enter your contact number' name='number' value={details.number} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="address">Address</label></td>
          <td>
            <textarea name="address" placeholder='Enter your address' id="address" onChange={handleInputChange} cols="50" value={details.address} rows="10"></textarea>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="pass">Password</label>
          </td>
          <td>
            <input type="password" id='pass' name='pass' value={details.password} onChange={handleInputChange} placeholder='Enter your password' required/>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="cpass"> Confirm Password</label>
          </td>
          <td>
            <input type="password" id='cpass' name='cpass' value={details.cpassword} onChange={handleInputChange} placeholder='Enter your confirm password' required/>
          </td>
        </tr>
        <tr>
          <td>
            <label>Select your Gender 
              <select name='gender' size={1}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="others">Others</option>
                <option value="not_specified">Prefer not to say</option>
              </select>
            </label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button>Submit</button>
          </td>
        </tr>
      </table>
      </form> 
    </>
  )
}

export default Contact
