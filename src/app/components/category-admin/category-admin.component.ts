import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category'

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {

  title: string = 'Category Admin';
  //@Input() categories;

  @Output() sendCategory = new EventEmitter();
  id = 'id'
  name = 'name';
  //books = 'books'

  constructor() { }

  ngOnInit() {
  }

  onAddCategory() {
    let category = new Category(this.id, this.name);
    this.sendCategory.emit(category);
    console.log(category);
    this.id = 'id';
    this.name = 'name';
  }

  onIdChange(event) {
    this.id = event.target.value;
  }
  onNameChange(event) {
    this.name = event.target.value;
  }

}
