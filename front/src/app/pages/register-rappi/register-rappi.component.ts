import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-rappi',
  templateUrl: './register-rappi.component.html',
  styleUrls: ['./register-rappi.component.sass']
})
export class RegisterRappiComponent implements OnInit {
  name: string;
  phone: string;
  document: string;
  email: string;
  password: string;
  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    this.name = '';
    this.phone = '';
    this.document = '';
    this.email = '';
    this.password = '';
  }

  ngOnInit() {}

  register() {
    if (this.validateRegisterData()) {
      this.authenticationService
        .registerWithEmail(this.email, this.password)
        .then(authData => {
          const user = {
            uid: authData.user.uid,
            name: this.name,
            email: this.email,
            phone: this.phone,
            document: this.document,
            type: 'rappi'
          };
          this.userService.createUser(user);
        })
        .catch(error => {
          alert(error);
        });
    }
  }

  validateRegisterData(): boolean {
    if (!this.userService) {
      alert('You must agree to terms and conditions');
      return false;
    }
    if (this.document.length < 8) {
      alert('The document must have 8 or more characters');
      return false;
    }
    if (this.phone.length !== 10) {
      alert('The phone must have 10 numbers');
      return false;
    }
    if (this.password.length < 7) {
      alert('The password must have 7 or more characters');
      return false;
    }
    return true;
  }
  cancel() {
    this.router.navigate(['home-admin']);
  }
}
