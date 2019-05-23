import { ConfigurationService } from './../../services/configuration/configuration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  name: string;
  idNumber: number;
  email: string;
  phone: number;
  password: '';
  type: string;
  acceptTerms: boolean;
  constructor(
    private router: Router,
    public userService: UserService,
    private configurationService: ConfigurationService
  ) {}

  ngOnInit() {
    if (this.configurationService.currentUser) {
      this.goToLogin();
    }
  }

  goToLogin() {
    this.router.navigate(['']);
  }

  signUp() {
    this.userService
      .ValidateAndCreateUser(
        'customer',
        this.name,
        this.idNumber,
        this.phone,
        this.email,
        this.password
      )
      .then(data => {
        this.router.navigate(['login']);
      })
      .catch(error => {
        alert('An error has ocurred: ' + error.toString());
      });
  }
}
