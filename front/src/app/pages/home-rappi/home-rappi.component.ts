import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-rappi',
  templateUrl: './home-rappi.component.html',
  styleUrls: ['./home-rappi.component.sass']
})
export class HomeRappiComponent implements OnInit {
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

  showOrders() {
    this.router.navigate(['orders']);
  }
}
