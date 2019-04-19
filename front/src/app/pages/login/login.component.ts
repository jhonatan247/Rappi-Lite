import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string = '';
  remember: boolean;
  options: any;
  constructor(private router: Router, private http: HttpClient) {
    this.options = {
      headers: this.getHeaders(),
      observe: 'response',
      responseType: 'blob'
    };
    this.http.get("http://localhost:3000/api/user", this.options).subscribe(data=>console.log(data));
  }
  getHeaders(){
    const headers = new HttpHeaders();
    // headers.set('Content-Type', "application/json");
    headers.set('Content-Type', "multipart/form-data");
    headers.set('Authorization', 'my-token');
    return headers;
  }
  ngOnInit() {}

  login() {
    const res = this.http.post<any>("http://localhost:3000/api/login", {email:this.email, password: Md5.hashStr(this.password)}).subscribe(
    response=>{
      if(response.data.type == "client"){
        this.router.navigate(['home-user']);
      } else if(response.data.type == "rappitendero"){
        this.router.navigate(['home-rappi']);
      } else if(response.data.type == "administrator"){
        this.router.navigate(['home-admin']);
      }
    },err=>console.log(err)
    );
  }

  signUp() {
    this.router.navigate(['sign-up']);
  }
}
