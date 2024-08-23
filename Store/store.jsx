import { configureStore } from '@reduxjs/toolkit';
import authReducers from "../features/authSlice"
import alertReducers from "../features/alertSlice"


// Configure and export the store
const store = configureStore({
  reducer: {
    auth: authReducers,
    alert : alertReducers
  },
});

export default store;
