import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  ValidateAndCreateUser(
    uType: string,
    uName: string,
    uIdNumber: number,
    uPhone: number,
    uEmail: string,
    uPassword: string
  ) {
    const user = {
      type: uType,
      name: uName,
      id_number: uIdNumber,
      phone: uPhone,
      email: uEmail,
      password: Md5.hashStr(uPassword)
    };
    return this.http
      .post<any>('http://localhost:3000/api/signup', user)
      .toPromise();
  }
}
