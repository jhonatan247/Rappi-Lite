import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient ) { }

  getUsers(){
    return this.http.get("localhost:3000/api/user/");
  }
}
