import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}

  getRestaurants() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      authorization: this.authenticationService.token
    });
    const options = {
      headers: httpHeaders
    };
    return this.http
      .get<any>('http://localhost:3000/api/restaurant/list-of-nearby', options)
      .toPromise();
  }
}
