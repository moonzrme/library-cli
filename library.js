 import Book from "./book.js"

class Library  {
 #books = new Map()

    addBook(book){
     if(this.#books.has(book.ISBN)){
         throw new Error("Book already exists")}
     this.#books.set(book.ISBN,book)
    }
    removeBook(isbn){
        if(!this.#books.has(isbn)){
            throw new Error("Book doesnt exist")}
        this.#books.delete(isbn)
        }
    checkOut(isbn){
     if (!this.#books.has(isbn)){
         throw new Error("Book doesnt exist")}
     this.#books.get(isbn).checkOut()
     }
    returnBook(isbn){
        if (!this.#books.has(isbn)){
            throw new Error("Book doesnt exist")}
        this.#books.get(isbn).returnBook()
    }
 }

 export default Library;