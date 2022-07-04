import { configureStore } from "@reduxjs/toolkit";
import isLoggedIn from "./redux/reducers/userReducer";
import books from "./redux/reducers/bookReducer";
import cart from "./redux/reducers/cartReducer";
import bookInfo from "./redux/reducers/bookInfoReducer";

const store = configureStore({
  reducer: {
    books,
    isLoggedIn,
    cart,
    bookInfo,
  },
});

export default store;
