class Book {
    #checkedOut = false
    constructor(name, author, year,ISBN) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.ISBN = ISBN;

    }

    get isAvailable() {
           return !this.#checkedOut

    }
    checkOut(){
        if(this.#checkedOut){
            throw new Error(" Book is already checked out")}
        this.#checkedOut = true;

    }
    toString(){
        return `${this.name} — ${this.author} - ${this.year} - ${this.ISBN} - ${this.isAvailable ? "available" : "checked out"}`;
    }
    returnBook(){
        if(!this.#checkedOut){
            throw new Error("Book is not checked out")
        }
        this.#checkedOut = false;
    }
}

export default Book;