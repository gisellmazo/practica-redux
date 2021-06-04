import { AppState } from "./app.state";
import { Book } from "../book-list/books.model";
import { createSelector } from "@ngrx/store";

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);

export const selectCollection = createSelector(
  (state: AppState) => state.collection,
  (collection: Array<string>) => collection
)

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollection,
  (books: Array<Book>, collection: Array<string>) => {
    if (books && collection) {
      return collection.map((id) => books.find((book) => book.id === id));
    }
    return collection;
  }
);
