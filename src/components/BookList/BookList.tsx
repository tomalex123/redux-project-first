import { useSelector } from "react-redux";
import type { BookState } from "../../redux/store";
import {type NewBook } from "../../redux/books/actionCreators";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { deleteBook } from "../../redux/books/actionCreators";
import { toggleFavorite } from "../../redux/books/actionCreators";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import "./BookList.css";

export default function BookList() {
  const books = useSelector((state: BookState) => state.books.books); // Access the books array from the books reducer state
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch<AppDispatch>();
  let i = 0;

  const handleToggleFavorite = (id: string) => {
    dispatch(toggleFavorite(id))
  }
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books yet.</p>
      ) : (
        <ul>
            {books.map(({ title, author, id,isFavorite }: NewBook) => (
            <li key={id}>
                <div className="book-info"><span>{++i}</span> {title} by <strong>{author}</strong> </div>
                <div className="book-actions">
                  <button className="favorite" onClick={() => handleToggleFavorite(id)}>
                      {isFavorite ? <MdFavorite color="magenta"/>:
                      <MdFavoriteBorder/>
                      }
                    </button>
                    <button className="delete" onClick={() => dispatch(deleteBook(id))}>Delete</button>
                </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
