<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication/authentication.service';
=======
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
>>>>>>> update files"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  remember: boolean;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.password = '';
  }
  ngOnInit() {}

  validateAndLogin() {
    try {
      this.authenticationService
        .validateAndLogin(this.email, this.password)
        .then(response => {
          this.goToHome(response.data.type);
        })
        .catch(err => alert('Invalid email or password'));
    } catch (err) {
      alert(err);
    }
  }

  goToHome(userType: string) {
    if (userType === 'client') {
      this.router.navigate(['home-user']);
    } else if (userType === 'rappitendero') {
      this.router.navigate(['home-rappi']);
    } else if (userType === 'administrator') {
      this.router.navigate(['home-admin']);
    }
  }

  signUp() {
    this.router.navigate(["sign-up"]);
  }
}
