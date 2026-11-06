import Book from "./book.js"
const book1= new Book('AdventureTime', "Nazar Skaletskyi", 1998, "9799660001231")
const book2 = new Book("LoveStory", "Ann Skaletskyi", 2006, "9799600123601")

book1.checkOut()
console.log(`${book1}`)
console.log(`${book2}`)

try {
    book1.checkOut();}

 catch (error){
    console.log(error.message)
 }

try {
    book1.returnBook()
    console.log(`${book1}`);}

catch (error){
    console.log(error.message)
}
try {
    book1.returnBook();
} catch (error) {
    console.log(error.message);
}

