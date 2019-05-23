import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigurationService {
  currentUser: any;
  token: any;

  constructor(private http: HttpClient) {}

  setUserData(currentUser, token) {
    this.currentUser = currentUser;
    this.token = token;
    this.saveTokenInLocalStorage(token);
  }
  saveTokenInLocalStorage(token) {
    window.localStorage.setItem('token', token);
  }

  async load() {
    const token = window.localStorage.getItem('token');
    const route = this.getCurrentRoute();
    if (token) {
      try {
        const sessionData = await this.loginWithToken(token);
        this.currentUser = sessionData.user_data;
      } catch (error) {
        console.log(error);
        this.invalidatedSesion(route);
      }
    } else {
      this.invalidatedSesion(route);
    }
  }

  getCurrentRoute() {
    const urlTokens = location.href.split('/');
    return urlTokens.pop();
  }

  invalidatedSesion(route) {
    if (route !== '' && route !== 'sign-up') {
      this.goToLogin();
    }
  }
  private goToLogin() {
    location.href = '';
  }

  loginWithToken(token: string) {
    this.token = token;
    return this.http
      .post<any>(
        'http://localhost:3000/api/guard/login-with-token',
        {},
        this.getOptionsWithAuthorization()
      )
      .toPromise();
  }

  getOptionsWithAuthorization() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      authorization: this.token
    });
    const options = {
      headers: httpHeaders
    };
    return options;
  }
}
