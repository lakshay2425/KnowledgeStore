import { createSlice } from '@reduxjs/toolkit';

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
  

  export const { setLoginState, setAdminState, setUserState , setEmailState } = authSlice.actions;

  export default authSlice.reducer;