import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { RestaurantService } from '../../services/restaurant/restaurant.service';

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
          this.authenticationService.currentUser = response.data;
          this.goToHome(response.data.type);
        })
        .catch(err => alert('Invalid email or password'));
    } catch (err) {
      alert(err);
    }
  }

  goToHome(userType: string) {
    if (userType === 'client') {
      this.router.navigate(['address']);
    } else if (userType === 'rappitendero') {
      this.router.navigate(['home-rappi']);
    } else if (userType === 'administrator') {
      this.router.navigate(['home-admin']);
    }
  }

  signUp() {
    this.router.navigate(['sign-up']);
  }
}
