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

// ===== Тести пошуку =====
console.log("--- Search ---");
library.addBook(book2);
library.checkOut("9799660001231");

console.log(library.findByAuthor("Nazar Skaletskyi").map(String)); // [book1]
console.log(library.findByAuthor("Nobody"));                       // []
console.log(library.getAvailable().map(String));                   // тільки book2
                            // ===== Тести fromArray =====
console.log("--- FromArray ---");
const data = [
    { name: "MidnightCode", author: "Oleh Bondar", year: 2015, ISBN: "9781234567897" },
    { name: "SilentRiver", author: "Iryna Koval", year: 2009, ISBN: "9780987654321" },
    { name: "StarDust", author: "Oleh Bondar", year: 2021, ISBN: "9785556667778" },
];
const lib = Library.fromArray(data)

console.log(lib.getAvailable().map(String));