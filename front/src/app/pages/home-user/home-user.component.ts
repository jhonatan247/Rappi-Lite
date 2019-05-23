import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.sass']
})
export class HomeUserComponent implements OnInit {
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

  showRestaurants() {
    this.router.navigate(['restaurants']);
  }
}
