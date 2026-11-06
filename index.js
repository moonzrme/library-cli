import Book from "./book.js";
import Library from "./library.js";

const book1 = new Book("AdventureTime", "Nazar Skaletskyi", 1998, "9799660001231");
const book2 = new Book("LoveStory", "Ann Skaletskyi", 2006, "9799600123601");

// ===== Тести Book =====
console.log("--- Book ---");

book1.checkOut();
console.log(`${book1}`);
console.log(`${book2}`);

try {
    book1.checkOut();
} catch (error) {
    console.log(error.message);
}

book1.returnBook();
console.log(`${book1}`);

try {
    book1.returnBook();
} catch (error) {
    console.log(error.message);
}

// ===== Тести Library =====
console.log("--- Library ---");

const library = new Library();
library.addBook(book1);
library.addBook(book2);

library.checkOut("9799660001231");
console.log(`${book1}`);

library.returnBook("9799660001231");
console.log(`${book1}`);

try {
    library.addBook(book1);
} catch (error) {
    console.log(error.message);
}

try {
    library.checkOut("000");
} catch (error) {
    console.log(error.message);
}

library.removeBook("9799600123601");
try {
    library.removeBook("9799600123601");
} catch (error) {
    console.log(error.message);
}