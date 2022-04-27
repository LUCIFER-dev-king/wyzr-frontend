import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchBook from "../components/SearchBook";
import { searchBooks } from "./api/searchApi";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);

  //TODO:
  //For pagination
  // -- startIndex ---> 0 and endingInex -->10 and next paginate start->end+1 and end->end+10

  const searchHandler = () => {
    SetIsLoading((prev) => !prev);
    searchBooks({ bookName: searchText }).then((res) => {
      if (res !== undefined) {
        setSearchResult(res);
      }
      SetIsLoading((prev) => !prev);
    });
  };

  return (
    <div className="container">
      <div className="bg-light shadow p-2 rounded mt-5">
        <div className="d-flex">
          <input
            data-testid="search-input"
            style={{
              background: "none",
              outline: "none",
              border: "none",
            }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search"
            color="#fff"
            className="text-left ps-2 w-100"
            onKeyDown={(e) => (e.key === "Enter" ? searchHandler() : "")}
          />
          <div style={{ cursor: "pointer" }} className="h-100 my-auto pe-2">
            <FaSearch data-testid="search-button" onClick={searchHandler} />
          </div>
        </div>
      </div>

      <div className="mt-3 p-2">
        {isLoading ? (
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          searchResult.length > 0 && (
            <ul data-testid="search-result" aria-roledescription="listitem">
              {searchResult.map((result, id) => (
                <li key={result.id}>
                  <SearchBook bookInfo={result} />
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
};

export default Search;
