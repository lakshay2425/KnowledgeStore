import { configureStore } from '@reduxjs/toolkit';
import alertReducers from "../features/alertSlice"
import bookDetailsSlice from '../features/bookDetailsSlice';
import userDetailsSlice from '../features/userDetailsSlice';

// Configure and export the store
const store = configureStore({
  reducer: {
    alert : alertReducers,
    book : bookDetailsSlice,
    user : userDetailsSlice,
  },
});

export default store;
