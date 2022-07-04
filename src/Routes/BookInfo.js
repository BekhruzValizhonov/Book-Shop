import React from "react";
import { useSelector } from "react-redux";
import uniqid from "uniqid";
import "./bookInfo.css";

function BookInfo() {
  let bookInfoReducer = useSelector((state) => state.bookInfo);
  return (
    <div>
      {bookInfoReducer.map((book) => {
        return (
          <div key={uniqid()} className="perrent-info">
            <div className="info-flex">
              <div>
                <img src={book.img} alt="404" width={500} />
              </div>
              <div className="information">
                <h1>{book.title}</h1>
                <p className="info-para">
                  Author: <b>{book.author}</b>
                </p>
                <p className="info-para">
                  Price: <b>{book.price}$</b>
                </p>
                <p className="info-para">
                  Code: <b>{book.code}</b>
                </p>
                <p className="info-para">
                  ISBN: <b>{book.isbn}</b>
                </p>
                <div className="container">
                  <p className="description">{book.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookInfo;
