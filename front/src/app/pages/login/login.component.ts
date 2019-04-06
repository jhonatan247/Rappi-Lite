import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  remember: boolean;
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {}

  signUp() {
    this.router.navigate(['sign-up']);
  }
}
