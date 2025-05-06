const connectDB = require("./db");
const { ObjectId } = require("mongodb");
async function addBook(bookData) {
  try {
    const db = await connectDB();
    const bookCollection = db.collection("books");
    if (!bookData.chapters) {
      bookData.chapters = [];
    }
    let result = await bookCollection.insertOne(bookData);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getBooks() {
  try {
    const db = await connectDB();
    const bookCollection = db.collection("books");
    const books = await bookCollection.find({}).toArray();
    console.log(books);
    return books;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function removeBook(id) {
  try {
    const db = await connectDB();
    const bookCollection = db.collection("books");
    let result = await bookCollection.deleteOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function updateBook(id, newData) {
  try {
    const db = await connectDB();
    const bookCollection = db.collection("books");
    let result = await bookCollection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: newData,
      }
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function getBookbyId(id) {
  try {
    const db = await connectDB();
    const bookCollection = db.collection("books");
    const books = await bookCollection.findOne({ _id: new ObjectId(id) });
    console.log(books);
    return books;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function addChapter(id, newChapter) {
  const db = await connectDB();
  const bookCollection = db.collection("books");
  let result = await bookCollection.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $push: {
        chapters: {
          $each: Array.isArray(newChapter) ? newChapter : [newChapter],
        },
      },
    }
  );
  return result;
}
async function removeChapter(id, newChapter) {
  const db = await connectDB();
  const bookCollection = db.collection("books");
  let result = await bookCollection.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $pull: {
        chapters: {
          $in: Array.isArray(newChapter) ? newChapter : [newChapter],
        },
      },
    }
  );
  return result;
}

module.exports = {
  addBook,
  updateBook,
  getBooks,
  getBookbyId,
  removeBook,
  addChapter,
  removeChapter,
};
