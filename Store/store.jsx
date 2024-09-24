import { configureStore } from '@reduxjs/toolkit';
import alertReducers from "../features/alertSlice"


// Configure and export the store
const store = configureStore({
  reducer: {
    alert : alertReducers
  },
});

export default store;
