import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for your state
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    admin: false,
    user: false,
    gmail : ""
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
    setGmailState: (state, action) => {
      state.gmail = action.payload;
    },
  },
});

// Export actions
export const { setLoginState, setAdminState, setUserState , setGmailState} = authSlice.actions;

// Configure and export the store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
