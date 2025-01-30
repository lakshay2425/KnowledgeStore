import  { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import axiosInstance from "../../utils/Axios";
import useAlert  from "../../utils/setAlert";




const Contact = () => {
  const { handleSuccess, handleError } = useAlert();

    //Managing state of the form's data 
  const [details, setDetails] = useState({
    username: "",
    gmail: "",
    concern: "",
  });

    //Function to handle change in input fields value
    const handleInputChange = (e) => {
    setDetails((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

    //Function to handle form submission
  const handleSubmit = async (e) => {
    
      e.preventDefault();
      await axiosInstance.post(
        `${import.meta.env.VITE_BACKEND_URL}/forms/contactDetails`,
        {details},
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(()=>{
        handleSuccess("Thank you for contaxting us, We will get back to you soon");
        setDetails({
        username: "",
        gmail: "",
        concern: "",
      });
      })
    .catch ((error)=> {
      if (error.response.status === 429) {
        handleError('Rate limit exceeded. Please try again later.');
      }else if(error.response.success === false){
        handleError("Error occured while submitting the form, Please try again");
      }
      setDetails({
        username: "",
        gmail: "",
        concern: "",
      });
    })
  };

  return (
    <>
    <div className="grid grid-cols-2 w-full px-[5vw] py-6 pt-14 justify-between max-md:grid-cols-1">
        <div className="max-w-96  pt-16 max-md:pt-0">
          <div className="flex-col space-y-4 max-md:">
            <h2 className="font-bold text-5xl leading-tight">Have a Question or Concern?</h2>
            <p className="text-lg">Let us know how we can assist you. Use the contact form to send us a message, and we’ll make sure to respond promptly.</p>
          </div>
        </div>
        <div className="col-start-2 justify-self-end p-16  rounded-large max-md:col-start-1 , max-md:p-4 max-md:justify-self-auto ">
            <form method="post" onSubmit={handleSubmit} className="flex-col space-y-4">
            <div className="">
              <p className="py-2">Name</p>
              <div className=" flex items-center space-x-2 "> 
                <input className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="text"
                  id="username"
                  autoComplete="username"
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  name="username"
                  value={details.username}
                />
                <FaUser className="icon"/>
              </div>
              </div>
              <div>
              <p className="py-2">Email</p>
              <div className="flex items-center space-x-2">
                <input  className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  type="gmailt"
                  id="gmail"
                  autoComplete="email"
                  onChange={handleInputChange}
                  placeholder="Enter your gmail"
                  name="gmail"
                  value={details.gmail}
                />
                <IoIosMail className="icon"/>
              </div>
              </div>
              <div>
              <p className="py-2">Message</p>
              <div className="flex items-center space-x-2">
                <textarea className="w-full p-2 rounded-lg bg-slate-100 border-medium"
                  name="concern"
                  id="concern"
                  autoCapitalize="off"
                  onChange={handleInputChange}
                  cols="33"
                  placeholder="Enter the reason why you want to contact"
                  value={details.concern}
                  rows="5"
                ></textarea>
              </div>
              </div>
              <button type="submit" className="p-2 rounded-xl bg-slate-400 text-slate-100 hover:bg-slate-950 hover:scale-110 hover:border-medium">Send Feedback</button>
          </form>
        </div>
        <div  className="col-span-2 h-80 shadow-inner drop-shadow-2xl rounded-2xl bg-[url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <img className="cover" src="" alt="" />
        </div>
      </div> 
    </>
  );
};

export default Contact;
