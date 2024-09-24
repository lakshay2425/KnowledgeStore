import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { clearAlert } from '../../../features/alertSlice';
import "./alert.css";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  if (!alert.isVisible) return null;

 
  return (
    
    <div className={`alert alert-${alert.type} absolute top-20 left-1/3 rounded-large -translate-x-1/4 -translate-y-1/4 w-[60vw] z-30 opacity-85 ease-linear duration-400`}>
      {alert.message}
      <AiOutlineClose onClick={() => dispatch(clearAlert())} className='absolute right-4 top-5'/>
    </div>
  );
};

export default Alert;
