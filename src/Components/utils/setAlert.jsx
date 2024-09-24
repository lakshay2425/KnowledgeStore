import { useDispatch } from 'react-redux';
import { setAlert } from '../../../features/alertSlice';

export const useAlert = () => {
  const dispatch = useDispatch();

  const handleSuccess = (message) => {
    dispatch(setAlert({ type: 'success', message }));
  };

  const handleError = (message) => {
    dispatch(setAlert({ type: 'error', message }));
  };

  return {
    handleSuccess,
    handleError,
  };
};
