import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.sass']
})
export class HomeAdminComponent implements OnInit {
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

  register() {
    this.router.navigate(['register-rappi']);
  }
}
