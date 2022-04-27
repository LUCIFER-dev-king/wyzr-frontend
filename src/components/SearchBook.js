import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBook = ({ bookInfo }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-100 h-25 bg-light mt-2 search--book"
      onClick={() => navigate(`/book/${bookInfo.id}`)}
    >
      <div className="d-flex p-2">
        <div>
          {bookInfo.volumeInfo.imageLinks !== undefined && (
            <img
              className="book--container--img--large"
              src={bookInfo.volumeInfo.imageLinks.thumbnail}
              alt=""
            />
          )}
        </div>
        <div className="ps-2">
          {bookInfo.volumeInfo.title !== undefined && (
            <h3>{bookInfo.volumeInfo.title}</h3>
          )}
          {bookInfo.volumeInfo.subtitle !== undefined && (
            <p>{bookInfo.volumeInfo.subtitle}</p>
          )}
          {bookInfo.volumeInfo.authors !== undefined &&
            bookInfo.volumeInfo.authors.map((author, id) => (
              <h5 key={id}>{author}</h5>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
