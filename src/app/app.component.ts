import { Component } from '@angular/core';
import { Category } from '../app/models/category';
import { Book } from '../app/models/book'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  categories = [];

  constructor() {

      let c1 = new Category('cat01', 'Novel');
      c1.setBooks([new Book('book01', '100 años de soledad', 'Gabriel García Márquez', c1, 50)]);
  
      let c2 = new Category('cat01', 'Mistery');
      c2.setBooks([new Book('book02', 'La casa de los espíritus', 'Isabel Allende', c2, 30)]);
  
      this.categories = [ c1, c2];
  }

  receiveBook(book: Book) {
    // console.log(book);
    for (var category of this.categories) {
      // console.log(category.getName());
      // console.log(book.getCategory());
      if (category.getName() == book.getCategory().getName()) {
        category.getBooks().push(book);

      }
    }
  }

  receiveCategory(category) {
    this.categories.push(category);

  }
}
