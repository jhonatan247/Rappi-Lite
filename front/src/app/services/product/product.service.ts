import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<any>;
  constructor(private http: HttpClient) {}

  getProducts(rid) {
    return this.http
      .post<any>('http://localhost:3000/api/restaurants/listOfNearby', {
        restaurant_id: rid
      })
      .toPromise();
  }
}
