import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-register-rappi',
  templateUrl: './register-rappi.component.html',
  styleUrls: ['./register-rappi.component.sass']
})
export class RegisterRappiComponent implements OnInit {
  name: string;
  phone: number;
  document: number;
  email: string;
  password: string;
  type: string;
  constructor(private router: Router, private http: HttpClient) {
    this.password = '';
  }

  ngOnInit() {}

  register() {
    const res = this.http
      .post<any>('http://localhost:3000/api/signup', {
        type: 'rappitendero',
        name: this.name,
        id_number: this.document,
        phone: this.phone,
        email: this.email,
        password: Md5.hashStr(this.password)
      })
      .subscribe(
        data => {
          this.router.navigate(['home-admin']);
        },
        error => alert('An error has ocurred: ' + error.toString())
      );
  }

  cancel() {
    this.router.navigate(['home-admin']);
  }
}
