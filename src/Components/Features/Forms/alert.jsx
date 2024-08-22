import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setAlert, clearAlert } from './alertSlice';



const alert = () => {
    const dispatch = useDispatch();
    const handleSuccess = () => {
        dispatch(setAlert({ type: 'success', message: 'Action completed successfully!' }));
      };
    
      const handleError = () => {
        dispatch(setAlert({ type: 'error', message: 'Something went wrong!' }));
      };

      const clearAlert = () =>{
        dispatch(clearAlert({ type: '', message: '' , isVisible : false}));
      }
  return (
    <>
      
    </>
  )
}

export default alert
