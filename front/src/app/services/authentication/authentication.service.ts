import { ConfigurationService } from './../configuration/configuration.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) {}

  validateAndLogin(userEmail: string, password: string): Promise<any> {
    if (this.validateCredentials(userEmail, password)) {
      return this.http
        .post<any>('http://localhost:3000/api/guard/login', {
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

  signOut() {
    return this.http
      .post<any>(
        'http://localhost:3000/api/guard/sign-out',
        {},
        this.configurationService.getOptionsWithAuthorization()
      )
      .toPromise()
      .then(signOuthData => {
        this.configurationService.token = null;
        this.configurationService.currentUser = null;
        return signOuthData;
      });
  }
}
