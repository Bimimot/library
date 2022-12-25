import { combineReducers } from "redux";
import { booksReducer, booksSlice } from './books/books';

export const rootReducer = combineReducers({
    books: booksReducer
});

export const allActions = {
    ...booksSlice.actions
};