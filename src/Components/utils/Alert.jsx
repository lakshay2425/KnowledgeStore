import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearAlert } from '../../Store/store';
import "./alert.css";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  if (!alert.isVisible) return null;

  return (
    <div className={`alert alert-${alert.type}`}>
      {alert.message}
      <button onClick={() => dispatch(clearAlert())} className="dismiss-btn">X</button>
    </div>
  );
};

export default Alert;
