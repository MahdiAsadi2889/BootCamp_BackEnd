// Book Managment

class Book {
  #title;
  #author;
  #year;
  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;
    this.#year = year;
  }
  // Getter برای عنوان کتاب
  get title() {
    return this.#title;
  }

  // Getter برای نویسنده
  get author() {
    return this.#author;
  }

  // Getter برای سال انتشار
  get year() {
    return this.#year;
  }
}

class Library {
  #books = [];

  constructor() {}
  addbook(book) {
    this.#books.push(book);
  }
  getBooks() {
    return this.#books;
  }
  findBookByTitle(title) {
    return this.#books.find((book) => book.title === title);
  }
}

const library = new Library();
const book1 = new Book("48 law of power", "robert green", 1990);
const book2 = new Book("The Compound Effect", "Daren Hardy", 1986);
library.addbook(book1);
library.addbook(book2);
console.log(library.getBooks());
console.log("-----------------------");
console.log(library.findBookByTitle("48 law of power"));
