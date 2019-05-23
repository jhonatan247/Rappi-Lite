import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.sass']
})
export class HomeAdminComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  signOut() {
    this.authenticationService
      .signOut()
      .then(() => {
        this.router.navigate(['']);
      })
      .catch(error => alert('An error has ocurred: ' + error.toString()));
  }

  register() {
    this.router.navigate(['register-rappi']);
  }
}
