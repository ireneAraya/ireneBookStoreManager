import { Category } from './category';

export class Book {

    private id: string;
    private name: string;
    private author: string;
    private category : Category;
    private price: number;

    constructor(id: string, name: string, author: string, category: Category, price: number) {
        this.setId(id);
        this.setName(name);
        this.setAuthor(author);
        this.setCategory(category);
        this.setPrice(price);
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getAuthor() { return this.author; }
    getCategory() { return this.category; }
    getPrice() { return this.price; }
    setId(value) { this.id = value; }
    setName(value) { this.name = value; }
    setAuthor(value) { this.author = value; }
    setCategory(value) { this.category = value; }
    setPrice(value) { this.price = value; }
}