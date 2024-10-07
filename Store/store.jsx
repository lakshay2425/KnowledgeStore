import { configureStore } from '@reduxjs/toolkit';
import alertReducers from "../features/alertSlice"
import bookDetailsSlice from '../features/bookDetailsSlice';
import loginAuthSlice from '../features/loginAuthSlice';


// Configure and export the store
const store = configureStore({
  reducer: {
    alert : alertReducers,
    book : bookDetailsSlice,
    auth : loginAuthSlice
  },
});

export default store;
