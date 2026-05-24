import * as actionType from "./actionType";
//When you do import * as actionType, TypeScript/JavaScript collects all exports into a module namespace object: typeof actionType

/*
actionType = {
  ADD_BOOK: "ADD_BOOK",
  DELETE_BOOK: "DELETE_BOOK",
  FAVORITE_BOOK: "FAVORITE_BOOK"
}
  */

// Define the NewBook interface to represent the structure of a book object
export interface NewBook {
  title: string;
  author: string;
  id: string;
  isFavorite?: boolean;
}

export const addBook = (newBook: NewBook) => { 
  return {
    type: actionType.ADD_BOOK,
    payload: newBook
  }
};

export const deleteBook = (bookId: string) => {
  return {
    type: actionType.DELETE_BOOK,
    payload: bookId
  }
};
export const toggleFavorite = (id: string) => {
  return {
    type: actionType.TOGGLE_FAVORITE,
    payload: id
  }
}
export const findBook = (query: string) => ({
  type: actionType.FIND_BOOK,
  payload: query
});

