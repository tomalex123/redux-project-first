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

export const findBook = (bookId: string) => {
  return {
    type: actionType.FIND_BOOK,
    payload: bookId
  }
};