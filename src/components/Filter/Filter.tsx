import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, BookState } from "../../redux/store";
import { findBook } from "../../redux/books/actionCreators";
import "./Filter.css";

export default function Filter() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const foundBook = useSelector((state: BookState) => state.books.foundBook);

  const handleSearch = (value: string) => {
    setQuery(value);
    dispatch(findBook(value));
  };

  const handleClear = () => {
    setQuery("");
    dispatch(findBook(""));
  };

  return (
    <div className="filter-wrapper">

      {/* ✅ Found book shown ABOVE the input */}
      {foundBook && query && (
        <div className="filter-result">
          <div className="filter-result__label">🔍 Found</div>
          <div className="filter-result__card">
            <div className="filter-result__title">{foundBook.title}</div>
            <div className="filter-result__author">by {foundBook.author}</div>
          </div>
        </div>
      )}

      {/* Not found message */}
      {!foundBook && query && (
        <div className="filter-result filter-result--empty">
          <span>😔 No book found for "<strong>{query}</strong>"</span>
        </div>
      )}

      {/* Search input */}
      <div className="filter-input-row">
        <div className="filter-input-wrapper">
          <span className="filter-icon">🔍</span>
          <input
            type="text"
            className="filter-input"
            placeholder="Search by title or author..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {query && (
            <button className="filter-clear" onClick={handleClear}>✕</button>
          )}
        </div>
      </div>

    </div>
  );
}