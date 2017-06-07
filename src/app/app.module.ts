import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { CategoryAdminComponent } from '../app/components/category-admin/category-admin.component';
import { BookAdminComponent } from '../app/components/book-admin/book-admin.component';
import { CategoriesComponent } from '../app/components/categories/categories.component';
import { CategoryComponent } from '../app/components/category/category.component';
import { BookComponent } from '../app/components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryAdminComponent,
    BookAdminComponent,
    CategoriesComponent,
    CategoryComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
