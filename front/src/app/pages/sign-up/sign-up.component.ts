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
  id_number: number;
  email: string;
  phone: number;
  password: string = '';
  type: string;
  acceptTerms: boolean;
  constructor(private router: Router, public userService: UserService) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['']);
  }

  signUp() {
    this.userService
      .ValidateAndCreateUser(
        'customer',
        this.name,
        this.id_number,
        this.phone,
        this.email,
        this.password
      )
      .then(data => {
        this.router.navigate(['login']);
      })
      .catch(error => {
        alert('An error has ocurred: ' + error);
      });
  }
}
