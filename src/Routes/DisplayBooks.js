import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { decrement, increment } from "../redux/reducers/bookReducer";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/reducers/cartReducer";
import { bookInfo } from "../redux/reducers/bookInfoReducer";
import { useState } from "react";
import { Category } from "../CategorySelect/Category";
import "./displayBook.css";

function DisplayBooks() {
  const [searchBook, setSearchBook] = useState("");
  let bookReducer = useSelector((state) => state.books);
  const [filterBooks, setFilterBooks] = useState(bookReducer.books);
  let cartReducer = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="text-cart-navbar">
        <div className="category-navbar">
          <Category setFilterBooks={setFilterBooks} bookReducer={bookReducer} />
        </div>

        <input
          type="text"
          placeholder="Search"
          value={searchBook}
          onChange={(e) => setSearchBook(e.target.value)}
          style={{ width: "30%", backgroundColor: "white" }}
        />

        <Link
          id="cart-text"
          style={{ fontSize: "1.5rem", marginLeft: "2rem" }}
          to="/cart"
        >
          <i className="material-icons">add_shopping_cart</i>
          <sup>{cartReducer.books.length}</sup>
        </Link>
      </div>

      <div className="card-parrent">
        {filterBooks.map((book) => {
          let searchRegex = new RegExp(searchBook, "i");

          if (searchRegex.test(book.title) || searchRegex.test(book.author)) {
            return (
              <div className="card" key={uniqid()}>
                <Link
                  style={{ width: "300px", height: "500px" }}
                  onClick={() =>
                    dispatch(
                      bookInfo({
                        book: bookReducer.books,
                        id: book.id,
                      })
                    )
                  }
                  to="/bookInfo"
                >
                  <img src={book.img} className="card-img-top" alt="404" />
                </Link>

                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.author}</p>

                  <div className="flex-card-title">
                    <span className="card-text">{book.price}$</span>
                    <div className="piece-book">
                      <button
                        className="bg-danger decrement"
                        disabled={book.isAdded}
                        onClick={() =>
                          dispatch(
                            decrement({
                              price: book.price,
                              id: book.id,
                            })
                          )
                        }
                      >
                        -
                      </button>
                      <span className="span-piece">{book.piece} piece</span>
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          dispatch(
                            increment({
                              price: book.price,
                              id: book.id,
                              cartTotalPrice: cartReducer.books,
                            })
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  className="add-button"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: book.id,
                        books: bookReducer.books,
                        price: book.price,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    </div>
  );
}

export default DisplayBooks;
