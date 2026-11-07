 import Book from "./book.js"
 import book from "./book.js";

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
    findByAuthor(author) {
        return Array.from(this.#books.values()).filter(book => book.author === author);
    }
    getAvailable(){
     return Array.from(this.#books.values()).filter(book=> book.isAvailable === true)
    }

    static fromArray(arr){
        const library = new Library();
     for (const obj of arr){
        const b = new Book(obj.name, obj.author, obj.year,obj.ISBN)
         library.addBook(b);
     }
        return library
    }


 }

 export default Library;