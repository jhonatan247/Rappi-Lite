import { ConfigurationService } from './../configuration/configuration.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) {}

  getRestaurants() {
    return this.http
      .get<any>(
        'http://localhost:3000/api/restaurant/list-of-nearby',
        this.configurationService.getOptionsWithAuthorization()
      )
      .toPromise();
  }
}
