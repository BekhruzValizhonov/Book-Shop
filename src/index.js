import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import BookInfo from "./Routes/BookInfo";
import Cart from "./Routes/Cart";
import CreateBook from "./Routes/CreateBook";
import DisplayBooks from "./Routes/DisplayBooks";
import Layout from "./Routes/Layout";
import Login from "./Routes/Login";
import store from "./store";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />}></Route>
            <Route path="createBook" element={<CreateBook />}></Route>
            <Route path="displayBook" element={<DisplayBooks />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="bookInfo" element={<BookInfo />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
