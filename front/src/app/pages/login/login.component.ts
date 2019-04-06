import { AuthenticationService } from './../../services/authentication.service';
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
  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {}

  login() {
    this.authenticationService
      .loginWithEmail(this.email, this.password)
      .catch(error => {
        alert('The data entered is incorrect');
      });
  }

  signUp() {
    this.router.navigate(['sign-up']);
  }
}
