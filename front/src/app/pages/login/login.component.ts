import { ConfigurationService } from './../../services/configuration/configuration.service';
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
    private authenticationService: AuthenticationService,
    private configurationService: ConfigurationService
  ) {
    this.password = '';
  }
  ngOnInit() {
    if (this.configurationService.currentUser) {
      this.goToHome(this.configurationService.currentUser.type);
    }
  }

  validateAndLogin() {
    try {
      this.authenticationService
        .validateAndLogin(this.email, this.password)
        .then(response => {
          this.configurationService.setUserData(
            response.user_data,
            response.token
          );
          this.goToHome(response.user_data.type);
        })
        .catch(err => alert('Incorrect email or password'));
    } catch (err) {
      alert(err);
    }
  }

  goToHome(userType: string) {
    if (userType === 'customer') {
      this.router.navigate(['address']);
    } else if (userType === 'shopkeeper') {
      this.router.navigate(['home-rappi']);
    } else if (userType === 'admin') {
      this.router.navigate(['home-admin']);
    }
  }

  signUp() {
    this.router.navigate(['sign-up']);
  }
}
