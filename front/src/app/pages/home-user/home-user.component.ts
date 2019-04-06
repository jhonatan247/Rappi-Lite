import { User } from './../../interfaces/user.interface';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.sass']
})
export class HomeUserComponent implements OnInit {
  userName: string;
  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    this.userName = '';
    userService
      .getUser(authenticationService.getCurrentUser().uid)
      .valueChanges()
      .subscribe((user: User) => {
        this.userName = user.name;
      });
  }

  ngOnInit() {}

  signOut() {
    this.authenticationService.logOut();
  }
}
