import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksIndexComponent } from './pages/public/books/books-index/books-index.component';

const routes: Routes = [
  { path: 'books', component:BooksIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
