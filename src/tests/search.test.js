import React from "react";
import {
  getByTestId,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import Search from "../pages/Search";
import SearchBook from "../components/SearchBook";

describe("Testing search and list items", () => {
  it("Search component making api request...", async () => {
    render(<Search />);

    const inputElement = screen.getByTestId("search-input");
    const buttonElement = screen.getByTestId("search-button");

    fireEvent.change(inputElement, { target: { value: "flower" } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(screen.getByDisplayValue("flower")).toBeInTheDocument();
    });
  });

  it("Rendering book list with fake data....", () => {
    const books = [
      {
        id: "1",
        volumeInfo: {
          title: "New Book",
          subtitle: "New Book subtitle",
          authors: ["JK Rowling"],
          imageLinks: {
            thumbnail: "",
          },
        },
      },
      {
        id: "2",
        volumeInfo: {
          title: "Bharathiyar Poems",
          subtitle: "New Book stocks",
          authors: ["Bharathiyar"],
          imageLinks: {
            thumbnail: "",
          },
        },
      },
    ];

    render(<SearchBook bookInfo={books} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(10);
  });
});
