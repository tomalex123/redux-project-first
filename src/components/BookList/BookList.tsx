import { useSelector } from "react-redux";
import type { BookState } from "../../redux/store";
import {type NewBook } from "../../redux/books/actionCreators";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { deleteBook } from "../../redux/books/actionCreators";
import "./BookList.css";

export default function BookList() {
  const books = useSelector((state: BookState) => state.books);
  const dispatch = useDispatch<AppDispatch>();
  let i = 0;
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books yet.</p>
      ) : (
        <ul>
            {books.map(({ title, author, id }: NewBook) => (
            <li key={id}>
                <div className="book-info"><span>{++i}</span> {title} by <strong>{author}</strong> </div>
                <button onClick={() => dispatch(deleteBook(id))}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
