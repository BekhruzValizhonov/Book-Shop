import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    books: [],
  },

  reducers: {
    deletePurchasedBook: (state, action) => {
      state.books.splice(
        state.books.findIndex((book) => book.id === action.payload.id),
        1
      );
    },

    addToCart: (state, action) => {
      let bookArray = action.payload.books.find(
        (book) => book.id === action.payload.id
      );

      let book = state.books.find((book) => book.id === action.payload.id);
      if (book) {
        book.piece += bookArray.piece;
        book.saveTotalPrice += bookArray.saveTotalPrice;
      } else {
        state.books.push(bookArray);
      }
    },
    cartIncrement: (state, action) => {
      let bookArray = state.books.find((book) => book.id === action.payload.id);

      bookArray.piece += 1;

      let book = action.payload.book.find(
        (book) => book.id === action.payload.id
      );

      bookArray.saveTotalPrice += book.price;
    },

    cartDecrement: (state, action) => {
      let bookArray = state.books.find((book) => book.id === action.payload.id);

      bookArray.piece -= 1;

      let book = action.payload.book.find(
        (book) => book.id === action.payload.id
      );

      bookArray.saveTotalPrice -= book.price;

      if (bookArray.piece === 0) {
        state.books.splice(
          state.books.findIndex((book) => book.id === action.payload.id),
          1
        );
      }
    },
  },
});

export const { deletePurchasedBook, addToCart, cartIncrement, cartDecrement } =
  cartSlice.actions;
export default cartSlice.reducer;
