export class Category {

    private id: string;
    private name: string;
    private books = [];

    constructor(id: string, name: string) {
        this.setId(id);
        this.setName(name);
        // this.setBooks(books);
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getBooks() { return this.books; }
    setId(value) { this.id = value; }
    setName(value) { this.name = value; }
    setBooks(value) { this.books = value; }
}