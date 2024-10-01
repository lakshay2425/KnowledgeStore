import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../src/Components/utils/Axios';

const initialState = {
  booksInfo: [],
  financeBookInfo: [],
  fictionalBookInfo: [],
  biographyBookInfo: [],
  selfHelpBookInfo: [],
  skillBasedInfo: [],
  fetched: false,
  loading: false,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { book } = getState();
      //console.log((!(book.fetched)), "Condition value");
      if ((!(book.fetched))) {
        const response = await axiosInstance.get('http://localhost:3000/books');
        //console.log("Calling API From Redux Store", book.fetched);
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const bookReducer = createSlice({
  name: 'book',
  initialState,
  reducers: {}, // No reducers needed in this case
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.fetched = false; // Reset fetched flag before API call
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.booksInfo = action.payload || [];
        state.financeBookInfo = state.booksInfo.filter((book) => book.genres === "Finance");
        state.fictionalBookInfo = state.booksInfo.filter((book) => book.genres === "Fictional");
        state.biographyBookInfo = state.booksInfo.filter((book) => book.genres === "Biography");
        state.selfHelpBookInfo = state.booksInfo.filter((book) => book.genres === "Self-Help");
        state.skillBasedInfo = state.booksInfo.filter((book) => book.genres === "Skill-based");
        state.fetched = true;
        state.loading = false;
        //console.log(state.fetched, "After fetching the data")
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        console.error('Failed to fetch books:', action.error.message);
        // Handle error as needed (e.g., set error state)
      });
  },
});

export default bookReducer.reducer;
