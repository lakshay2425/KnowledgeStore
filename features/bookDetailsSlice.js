import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../src/Components/utils/Axios';

const initialState = {
  booksInfo: [],
  genreBookInfo: [],
  recommendedBooksInfo : [],
  bookFetched: false,
  recommendedBookFetch : false,
  loading: false,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { book } = getState();
      if (!book.bookFetched && book.booksInfo.length === 0) {
        const response = await axiosInstance.get(`${import.meta.env.VITE_BACKEND_URL}/books`);
        return response.data;
      }
      return book.booksInfo;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const fetchRecommendedBooks = createAsyncThunk(
  'books/fetchRecommendedBooks',
  async (_, {getState, rejectWithValue})=>{
    try{
      const {book } = getState();
      if(!book.fetchRecommendedBooks && book.recommendedBooksInfo.length === 0){
        const response = await axiosInstance.get(`${import.meta.env.VITE_BACKEND_URL}/recommendedBooks`);
        return response.data.data;
      }
      return book.recommendedBooksInfo;
    }catch(error){
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
)


const bookReducer = createSlice({
  name: 'book',
  initialState,
  reducers: {
    filterBooks : (state, action)=>{
      state.genreBookInfo = state.booksInfo.filter((book)=> book.genres === action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.booksInfo = action.payload;
        state.bookFetched = true;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        console.error('Failed to fetch books:', action.error.message);
        state.loading = false;
      })
      .addCase(fetchRecommendedBooks.pending, (state)=>{
        state.loading = true;
      })
      .addCase(fetchRecommendedBooks.fulfilled, (state,action)=>{
        state.recommendedBooksInfo = action.payload;
        state.fetchRecommendedBooks = true;
        state.loading = false;
      })
      .addCase(fetchRecommendedBooks.rejected, (state, action)=>{
        console.error('Failed to fetch books:', action.error.message);
        state.loading = false;
      })
  }
});

export default bookReducer.reducer;

export const  {filterBooks} = bookReducer.actions;