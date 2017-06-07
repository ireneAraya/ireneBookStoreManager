import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';
import { Category } from '../../models/category';


@Component({
  selector: 'app-book-admin',
  templateUrl: './book-admin.component.html',
  styleUrls: ['./book-admin.component.css']
})
export class BookAdminComponent implements OnInit {

  title: string = 'Book Admin';
  @Input() categories;

  @Output() sendBook = new EventEmitter();
  id = 'id'
  name = 'name';
  author = 'author';
  categoryName = 'Novel';
  category:Category = null;
  price = 0;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    let book = new Book(this.id, this.name, this.author, this.category, this.price);
    this.sendBook.emit(book);
    console.log(book);

    this.id = 'id';
    this.name = 'name';
    this.author = 'author';
    this.categoryName = 'Novel';
    this.price = 0;
    this.category = null;
  }

  //Agregue los metodos para menejar los eventos
  //cuando se hace un cambio en cada elemento
  //Al hacer esto tube que hacer los cambios en el html.
  onIdChange(event) {
    this.id = event.target.value;
  }
  onNameChange(event) {
    this.name = event.target.value;
  }

  onAuthorChange(event) {
    this.author = event.target.value;
  }

  onCategoryChange(event) {
    this.categoryName = event.target.value;
    for(var i=0; i < this.categories.length;i++) {
      if(this.categories[i].getName() === this.categoryName) {
        this.category = this.categories[i];
      }
    }
  }

  onPriceChange(event) {
    this.price = Number(event.target.value);
  } 

}
