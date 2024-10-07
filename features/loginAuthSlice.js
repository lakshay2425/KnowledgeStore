// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const getSessionUser = () => {
  const user = sessionStorage.getItem('isLoggedIn');
  return user ? JSON.parse(user) : null;
};

const initialState = {
  isLoggedIn: !!getSessionUser(),
  user: getSessionUser(),
};

const loginAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      sessionStorage.setItem('isLoggedIn', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      sessionStorage.removeItem('isLoggedIn');
    },
  },
});

export const { login, logout } = loginAuthSlice.actions;
export default loginAuthSlice.reducer;
