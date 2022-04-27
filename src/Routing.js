import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Home from "./pages/Home";
import Search from "./pages/Search";

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/book/:id" element={<Book />}></Route>
      </Routes>
    </Router>
  );
};
