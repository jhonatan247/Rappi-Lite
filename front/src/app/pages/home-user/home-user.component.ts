import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.sass']
})
export class HomeUserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  signOut() {
    this.router.navigate(['']);
  }
}
