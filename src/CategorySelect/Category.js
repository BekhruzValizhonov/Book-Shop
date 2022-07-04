import React, { useEffect, useState } from "react";

export const Category = ({ bookReducer, setFilterBooks }) => {
  const [bookCategory, setCategory] = useState({
    category: "All",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCategory({ ...bookCategory, [name]: value });
  };

  useEffect(() => {
    setFilterBooks(bookReducer.books);
  }, [bookReducer.books]);

  useEffect(() => {
    setFilterBooks(
      bookReducer.books.filter(
        (book) => book.category === bookCategory.category
      )
    );

    if (bookCategory.category === "All") {
      setFilterBooks(
        bookReducer.books.filter(
          (book) => book.category !== bookCategory.category
        )
      );
    }
  }, [bookCategory]);

  return (
    <select
      onChange={(e) => handleChange(e)}
      name="category"
      value={bookCategory.category || ""}
    >
      <option disabled defaultValue={"Category"}>
        Category
      </option>
      <option value={"All"}>All</option>
      <option value={"Classic"}>Classic</option>
      <option value={"Fantasy"}>Fantasy</option>
      <option value={"Roman"}>Roman</option>
    </select>
  );
};
