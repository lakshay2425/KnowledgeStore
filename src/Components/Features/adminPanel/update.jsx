import  {useState, useEffect} from 'react';
import axiosInstance from "../../utils/Axios"
import { useNavigate, useLocation } from 'react-router-dom';
import useAlert from "../../utils/setAlert";


const Update = () => {
  const { handleSuccess, handleError } = useAlert();
    const [details, setDetails] = useState({
        author: "",
        genres: "",
        price: "",
        quantity: "",
        title: "",
        imageLink: ''
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
                const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/search/${bookName}`;
                const response = await axiosInstance.get(apiUrl);
                if(response.status == 200){
                    setDetails(response.data.data);
                    setIsLoaded(true); // Mark as loaded
                }else{
                  handleError('Error fetching the data');
                }
            } catch (error) {
                handleError('Error fetching the data');
            }
        // }
    };
    fetchData();
// eslint-disable-next-line react-hooks/exhaustive-deps
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
        e.preventDefault();
        await axiosInstance.put(`http://localhost:3000/admin/update/${bookName}`, details,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(()=>{
          handleSuccess("Updated Book Details Successfully");
          setDetails({
              author: "",
              genres: "",
              price: "",
              quantity: "",
              title: "",
              imageLink: ''
            });  
            navigate("/Admin/Read");
        }) 
        .catch (()=> {
        handleError("Failed to update book details");
        setDetails({
            author: "",
            genres: "",
            price: "",
            quantity: "",
            title: "",
            imageLink: ''
          });  
        });
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
            <label htmlFor="title">Book Name</label>
          </td>
          <td>
            <input type="text" id='title' name='title'  onChange={handleInputChange} value={details.title}  required/>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="genres">genres</label>
          </td>
          <td>
            <input type="text" id='genres'  onChange={handleInputChange}  name='genres' value= {details.genres} />
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
            <label htmlFor="imageLink">Image Link</label>
          </td>
          <td>
            <input type="url" id='imageLink'  onChange={handleInputChange}  name='imageLink' value= {details.imageLink} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="quantity">quantity</label></td>
          <td>
            <input name= "quantity"  id= "quantity" onChange={handleInputChange}  value= {details.quantity}/>
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
