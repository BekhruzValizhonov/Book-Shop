import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bookAdded } from "../redux/reducers/bookReducer";
import "./createBook.css";

function CreateBook() {
  const [book, setbook] = useState({
    category: "Classic",
  });
  const [images, setImages] = useState([]);
  let navigate = useNavigate(null);
  let isLoggedIn = useSelector((state) => state.isLoggedIn);
  let dispatch = useDispatch();
  let bookRef = useRef(null);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/");
    }
  }, []);

  const onImagesChange = (e) => {
    setImages(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setbook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.price) {
      dispatch(
        bookAdded({
          title: book.title,
          author: book.author,
          description: book.description,
          price: book.price,
          image: images,
          category: book.category,
        })
      );
    } else {
      bookRef.current.innerText = `Invalid`;
    }
  };

  return (
    <div className="create-book">
      <form onSubmit={handleSubmit}>
        <label htmlFor="img" style={{ cursor: "pointer" }}>
          <span className="icon">
            <i className="material-icons">add</i>
          </span>
        </label>

        <input
          style={{ display: "none" }}
          type="file"
          id="img"
          onChange={onImagesChange}
        />
        <img src={images} width={300} />

        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={book.title || ""}
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author || ""}
          onChange={handleChange}
        />

        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Description"
          value={book.description || ""}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price || ""}
          onChange={handleChange}
        />

        <h3>Category</h3>
        <select onChange={handleChange} name="category" value={book.category}>
          <option value="Classic">Classic</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Roman">Roman</option>
        </select>
        <div className="anotherpage-button-link">
          <h1 style={{ color: "red", textAlign: "center" }} ref={bookRef}></h1>
          <div className="flex-left-right">
            <button className="btn btn-primary">Add</button>
            <Link to="/displayBook">Another-Page </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateBook;
