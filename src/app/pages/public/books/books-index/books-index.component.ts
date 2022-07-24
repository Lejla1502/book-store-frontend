import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-index',
  templateUrl: './books-index.component.html',
  styleUrls: ['./books-index.component.scss']
})
export class BooksIndexComponent implements OnInit {

  constructor(private bookService:BooksService) { }

  //to get bestseller's id from backend 
  bestsellerId:any;
  ngOnInit(): void {
    // this.bestsellerId=this.bookService.getBestseller().subscribe(
    //   (response=>{
    //     console.log(response);
    //     this.bestsellerId=response;
    //   })
    // );
  }

  ngAfterViewInit(): void {

    var _this = this;

    this.bookService.getBestseller().subscribe({  
      next: (response: any) => {
        console.log(response);
        _this.bestsellerId = response;  
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
