import { ConfigurationService } from './../configuration/configuration.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) {}
  CreateAddressUser(aValue: string, aLatitude: number, aLongitude: number) {
    const address = {
      value: aValue,
      latitude: aLatitude,
      longitude: aLongitude
    };

    return this.http
      .post<any>(
        'http://localhost:3000/api/customer/save-address',
        address,
        this.configurationService.getOptionsWithAuthorization()
      )
      .toPromise();
  }
}
