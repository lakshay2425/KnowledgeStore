import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
    name: 'alert',
    initialState: {
      type: '', // e.g., 'success', 'error', 'info', etc.
      message: '',
      isVisible: false, // to control the visibility of the alert
    },
    reducers : {
      setAlert: (state, action) => {
        state.type = action.payload.type;
        state.message = action.payload.message;
        state.isVisible = true;
      },
      clearAlert: (state) => {
        state.type = '';
        state.message = '';
        state.isVisible = false;
      }
    }
  })

export const {setAlert, clearAlert} = alertSlice.actions;

export default alertSlice.reducer;