const {
  addBook,
  getBooks,
  removeBook,
  updateBook,
  getBookbyId,
  addChapter,
  removeChapter,
} = require("./bookServices");
const { ObjectId } = require("mongodb");

async function main() {
  try {
    // const firstbook = await addBook({
    //   title: "Back to the future",
    //   author: "Elon Mask",
    //   chapters: [
    //     { chapter1: "Season1" },
    //     { chapter2: "Season2" },
    //     { chapter3: "Season3" },
    //     { chapter4: "Season4" },
    //     { chapter5: "Season5" },
    //   ],
    // });
    // const secondbook = await addBook({
    //   title: "Deep Work",
    //   author: "Cal Newport",
    //   chapters: [
    //     { chapter1: "Deep work is valuable" },
    //     { chapter2: "Deep work is rare." },
    //     { chapter3: "Deep work is meaningful." },
    //   ],
    // });
    // const thirdbook = await addBook({
    //   title: "Atomic Habits",
    //   author: "James Clare",
    //   chapters: [
    //     { chapter1: "Itroduction" },
    //     { chapter2: "The first law" },
    //     { chapter3: "The second law" },
    //     { chapter4: "The third law" },
    //   ],
    // });
    // console.log(firstbook);
    // console.log(secondbook);
    // console.log(thirdbook);

    // const result = await removeBook("67fe34d564c2ad7329cfe977");
    // console.log(result);

    let removeBook = await addChapter("67fe392eab0a864e26993130", {
      chapter8: "The sixth Law",
    });
    console.log(`The chapter removed ${addchapters}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

main();
