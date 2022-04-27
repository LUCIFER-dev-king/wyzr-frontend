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
});
