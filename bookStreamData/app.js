const Library = require("./library");

const myLibrary = new Library();

myLibrary.emitter.on("bookAdded", (book) => {
  console.log("Book Added:", book);
});

myLibrary.emitter.on("bookRemoved", (book) => {
  console.log("Book Removed", book);
});

myLibrary.addBook({ title: "1984", author: "George Orwell" });
myLibrary.addBook({ title: "The Hobbit", author: "J.R.R. Tolkien" });
myLibrary.addBook({ title: "48 PowerFul Law", author: "Robert Green" });

console.log("----------------------");

console.log("This Books In My Library", myLibrary.getBooks());

console.log("----------------------");

myLibrary.removeBook("1984");

console.log("----------------------");

console.log("This Books In My Library", myLibrary.getBooks());
