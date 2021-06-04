import { createReducer, on } from '@ngrx/store';

import { Book } from '../book-list/books.model';
import { retrievedBookList } from './books.actions';

export const initialState: Array<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { book }) => [...book])
);
