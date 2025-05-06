const EventEmitter = require('events');

class Library {
  constructor() {
    this.books = [];
    this.emitter = new EventEmitter();
  }

  getBooks() {
    return this.books;
  }
  addBook(book) {
    this.books.push(book);
    this.emitter.emit('bookAdded', book);
  }

  removeBook(bookTitle) {
    const index = this.books.findIndex(b => b.title === bookTitle);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      this.emitter.emit('bookRemoved', removedBook);
    }
  }
}

module.exports = Library;
