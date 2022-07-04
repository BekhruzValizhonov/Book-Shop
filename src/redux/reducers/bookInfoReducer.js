import { createSlice } from "@reduxjs/toolkit";

export const bookInfoSlice = createSlice({
  name: "BOOK_INFO",
  initialState: [],

  reducers: {
    bookInfo: (state, action) => {
      let bookInfo = action.payload.book.find(
        (book) => book.id === action.payload.id
      );

      let book = state.find((book) => book.id === action.payload.id);

      if (!book) {
        state.push(bookInfo);
      }
      if (state.length === 2) {
        state.shift();
      }
    },
  },
});

export const { bookInfo } = bookInfoSlice.actions;

export default bookInfoSlice.reducer;
