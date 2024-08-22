import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for your state
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    admin: false,
    user: false,
    email : ""
  },
  reducers: {
    setLoginState: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setAdminState: (state, action) => {
      state.admin = action.payload;
    },
    setUserState: (state, action) => {
      state.user = action.payload;
    },
    setEmailState: (state, action) => {
      state.email = action.payload;
    },
  },
});

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
// Export actions
export const { setLoginState, setAdminState, setUserState , setEmailState } = authSlice.actions;
export const {setAlert, clearAlert} = alertSlice.actions;

// Configure and export the store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert : alertSlice.reducer
  },
});

export default store;
