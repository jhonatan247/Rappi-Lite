import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}
  CreateAddressUser(
    uID: string,
    aValue: string,
    aLatitude: number,
    aLongitude: number
  ) {
    const address = {
      user_id: uID,
      value: aValue,
      latitude: aLatitude,
      longitude: aLongitude
    };
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      authorization: this.authenticationService.token
    });
    const options = {
      headers: httpHeaders
    };
    return this.http
      .post<any>('http://localhost:3000/api/customer/save-address', address, options)
      .toPromise();
  }
}
