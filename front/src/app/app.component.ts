import { User } from './interfaces/user.interface';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public router: Router,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    this.authenticationService.getStatus().subscribe(auth => {
      if (auth == null) {
        this.router.navigate(['']);
      } else {
        this.userService
          .getUser(auth.uid)
          .valueChanges()
          .subscribe((user: User) => {
            switch (user.type) {
              case 'admin':
                this.router.navigate(['home-admin']);
                break;
              case 'rappi':
                this.router.navigate(['home-rappi']);
                break;
              case 'user':
                this.router.navigate(['home-user']);
                break;
            }
          });
      }
    });
  }
}
