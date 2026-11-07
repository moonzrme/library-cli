# library-cli

A simple JavaScript library manager: add, check out, return and search books.

## Usage

```bash
node index.js
```
## Roadmap

### Refactoring
- [ ] Private `#getBook(isbn)` helper — remove repeated "not found" checks
- [ ] Consistent error messages (`Book not found`, `Book already exists`, ...)
- [ ] Validate input in `Book` constructor (empty name, invalid year, ISBN format)

### Features
- [ ] `EBook extends Book` (file size; can't be checked out physically → overridden `checkOut`)
- [ ] `findByTitle(query)` — case-insensitive partial match
- [ ] `getCheckedOut()` — list of borrowed books
- [ ] `size` getter — number of books in library
- [ ] Sort books by year / title
- [ ] Custom error classes: `BookNotFoundError`, `DuplicateBookError` (EJS ch. 8)

### Persistence
- [ ] Save library to `library.json` (`fs`, `JSON.stringify`)
- [ ] Load library from `library.json` on start (`fromArray`)
- [ ] Async version with `fs/promises` + `async/await` (EJS ch. 11)

### CLI
- [ ] Interactive menu in terminal (`readline`): add / remove / check out / return / search / exit
- [ ] Command-line arguments: `node index.js add "Title" "Author" 2020 "ISBN"`

### Quality
- [ ] Tests with `node:test` instead of console.log checks
- [ ] Split demo code from `index.js` into `demo.js`

### Later (backend stack)
- [ ] Rewrite in TypeScript
- [ ] REST API (Express → NestJS): `GET /books`, `POST /books`, `POST /books/:isbn/checkout`
- [ ] Store books in PostgreSQL instead of Map