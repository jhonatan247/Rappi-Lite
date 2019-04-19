import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  name: string;
  id_number: number;
  email: string;
  phone: number;
  password: string = '';
  type: string;
  acceptTerms: boolean;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['']);
  }

  signUp() {
    const res = this.http.post<any>("http://localhost:3000/api/signup", {
      type: "client",
      name: this.name,
      id_number: this.id_number,
      phone: this.phone,
      email: this.email,
      password: Md5.hashStr(this.password)
    }).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['']);
        },err=>console.log(err)
      );
  }
}
