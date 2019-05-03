import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private http: HttpClient) {}
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
    console.log(address);
    return this.http
      .post<any>('http://localhost:3000/api/address/save', address)
      .toPromise();
  }
}
