import useAlert from '../../utils/setAlert';
import DeleteUser from './DeleteUser';
import { Link, useNavigate } from 'react-router-dom';    

const Sidebar = () => {
    const navigate = useNavigate();
    const {handleSuccess} = useAlert();
    const handleNavigation = (available, path)=>{
        if(available){
            navigate(path);
        }else{
            handleSuccess("Coming Soon")
        }
    }
    const menuItems = [
        {pathName : "My profile", path : "/Profile", available: true},
        {pathName : "Orders" , path : "/Account/Orders",  available: false },
        {pathName : "Wishlist" , path : "/Wishlist", available: false},
        {pathName : "Tracking" , path : "/Account/Tracking" , available: false},
    ];
    return (
        <ul className="bg-slate-200/60 w-full md:w-48 lg:w-64 h-auto px-4 md:px-6 lg:px-8 py-6 text-zinc-600 text-base md:text-lg capitalize">
            {menuItems.map((item, index) => (
                <li
                    key={index}
                    className="list-none hover:bg-sky-200 rounded-full pl-4 md:pl-5 py-2 md:py-3 hover:text-blue-500 hover:font-medium duration-500"
                >
                    <Link onClick={()=>{handleNavigation(item.available, item.path)}}>{item.pathName}</Link>
                </li>
            ))}
            <li className='list-none rounded-full pl-4 hover:font-medium duration-500 md:pl-5 py-2 md:py-3 text-base md:text-lg capitalize'>
                <DeleteUser/>
            </li>
            
        </ul>
    );
};

export default Sidebar;