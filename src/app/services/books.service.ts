import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  readonly baseURL = 'https://localhost:44311/Customer/Book/GetBestseller';
  //bestsellerId:any;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  });

  constructor(private http:HttpClient, private route:ActivatedRoute, private router:Router) { }

   public getBestseller() {
   
    return this.http.get(this.baseURL,{headers:this.headers} );
  }
}
