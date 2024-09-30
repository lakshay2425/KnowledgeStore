import React from 'react'
import Userpage from './Components/Userpage'
const Accounts_data = () => {
  const data=[
    {
        srclink:"https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid",
        name:"Rafiqur Rahman",
        status:"Team Manager",
        Address:"london",
        Email:"admin@gmail.com",
        phone: "+1234567890",
        firstname:"Rafiqur",
        lastname:"Rahman",
        country:"United States",
        city:"london",
        postalcode:"1234567890",
        taxid:"234636"
    }
]
  return (
    <>
    {data.map((item, index) => (
          <Userpage key={index} data={item} />
        ))}
    
    </>
  )
}

export default Accounts_data