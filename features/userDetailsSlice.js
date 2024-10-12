import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: null,
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserDetails(state, action) {
      state.details = action.payload;
    },
    clearUserDetails(state) {
      state.details = null;
    },
  },
});

export const {
  setUserDetails,
  clearUserDetails,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
