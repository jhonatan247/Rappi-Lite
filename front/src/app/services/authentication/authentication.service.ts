import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser: any;

  constructor(private http: HttpClient) {}

  validateAndLogin(userEmail: string, password: string): Promise<any> {
    if (this.validateCredentials(userEmail, password)) {
      return this.http
        .post<any>('http://localhost:3000/api/login', {
          email: userEmail,
          password: Md5.hashStr(password)
        })
        .toPromise();
    }
  }

  validateCredentials(userEmail: string, password: string): boolean {
    if (!userEmail) {
      throw new Error('Invalid email');
    }
    if (!password) {
      throw new Error('Invalid password');
    }
    return true;
  }
}
