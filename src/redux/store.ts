import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/reducer";

// Configure the Redux store with the books reducer, which will manage the state of the books in the application.
const store = configureStore({
  reducer: { 
    books: booksReducer
  }
});

console.log(store);
// Define TypeScript types for the state and dispatch function of the Redux store, which can be used throughout the application for type safety.
export type BookState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export the configured Redux store along with its types.
export default store;