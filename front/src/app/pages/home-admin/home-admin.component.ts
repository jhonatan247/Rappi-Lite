import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.sass']
})
export class HomeAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  signOut() {
    this.router.navigate(['']);
  }

  register() {
    this.router.navigate(['register-rappi']);
  }
}
