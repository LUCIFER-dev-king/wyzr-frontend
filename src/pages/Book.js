import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { getBookInfo } from "./api/bookApi";

const Book = () => {
  const [bookInfo, setBookInfo] = useState();
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const query = window.location.pathname.split("/");
    getBookInfo(query[2]).then((res) => {
      console.log(res);
      setBookInfo(res);
      SetIsLoading((prev) => !prev);
    });
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner-border text-dark" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        <div className="d-flex p-2">
          <div>
            <img
              className="book--container--img--small"
              src={bookInfo.volumeInfo.imageLinks.thumbnail}
              alt=""
            />
          </div>
          <div className="ps-2">
            <h3>{bookInfo.volumeInfo.title}</h3>
            <p>{bookInfo.volumeInfo.subtitle}</p>
            {bookInfo.volumeInfo.authors.map((author, id) => (
              <h5 key={id}>{author}</h5>
            ))}
            {parse(bookInfo.volumeInfo.description)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
