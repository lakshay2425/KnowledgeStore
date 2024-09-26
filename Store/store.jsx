import { configureStore } from '@reduxjs/toolkit';
import alertReducers from "../features/alertSlice"
import bookDetailsSlice from '../features/bookDetailsSlice';


// Configure and export the store
const store = configureStore({
  reducer: {
    alert : alertReducers,
    book : bookDetailsSlice,
  },
});

export default store;
