import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import "../index.css";
import {
  cartDecrement,
  cartIncrement,
  deletePurchasedBook,
} from "../redux/reducers/cartReducer";

function Cart() {
  let cartReducer = useSelector((state) => state.cart);
  let bookReducer = useSelector((state) => state.books);
  let dispatch = useDispatch();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Cart</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Book Name</th>
            <th>Code</th>
            <th style={{ paddingLeft: "1.5rem" }}>Piece</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartReducer.books.length === 0 ? (
            <tr>
              <td style={{ fontSize: "2rem", borderBottom: "none" }}>
                Cart is empty!
              </td>
            </tr>
          ) : (
            cartReducer.books.map((book) => {
              return (
                <tr key={uniqid()}>
                  <td>
                    <img width={100} height={100} src={book.img} alt="404" />
                  </td>
                  <td>{book.title}</td>
                  <td>#{book.code}</td>
                  <td>
                    <button
                      className="incremetn-cart"
                      onClick={() =>
                        dispatch(
                          cartIncrement({
                            id: book.id,
                            book: bookReducer.books,
                          })
                        )
                      }
                    >
                      +
                    </button>
                    <span className="span-piece-cart">{book.piece}</span>
                    <button
                      className="decrement-cart"
                      onClick={() =>
                        dispatch(
                          cartDecrement({
                            id: book.id,
                            book: bookReducer.books,
                            totalPrice: book.totalPrice,
                          })
                        )
                      }
                    >
                      -
                    </button>
                    <button
                      className="icon-clear"
                      style={{ marginLeft: "1.5rem" }}
                      onClick={() =>
                        dispatch(
                          deletePurchasedBook({
                            id: book.id,
                          })
                        )
                      }
                    >
                      &times;
                    </button>
                  </td>
                  <td>{book.price}$</td>
                  <td>{book.saveTotalPrice.toFixed(2)}$</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
}

export default Cart;
