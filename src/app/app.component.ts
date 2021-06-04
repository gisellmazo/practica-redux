import { Store, select } from '@ngrx/store';
import {
  addBook,
  removeBook,
  retrievedBookList,
} from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';

import { Book } from './book-list/books.model';
import { Component } from '@angular/core';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica-redux';

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((book: Array<Book>) => this.store.dispatch(retrievedBookList({ book })));
  }
}
