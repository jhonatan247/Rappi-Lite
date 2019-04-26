import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  getRestaurants() {
    return this.http
      .get<any>('http://localhost:3000/api/restaurants')
      .toPromise();
  }
}
