import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Model/product';

const Initial_Data = [];

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private dataStore = new BehaviorSubject(Initial_Data);
  data$: Observable<Product[]> = this.dataStore.asObservable();
  products: Product[];
  BaseUri = "http://localhost:50324/v1";
  
  constructor(private http: HttpClient) { }

  httpGetProducts$ = this.http.get<Product[]>(`${this.BaseUri}/products`);

  loadProducts() {
    this.httpGetProducts$.pipe(
      catchError(err => {
        console.log('Error on requesting products', err);
        console.log(err.message);
        return throwError(err);
      }),
      catchError(err => {
        console.log('providing fallback value');
        // better to show error message in the page
        window.alert(err.message);
        return of([]);
      })
    )
      .subscribe(
        result => this.dataStore.next(result),
        error => console.log('HTTP error', error)
      )
  }
}

