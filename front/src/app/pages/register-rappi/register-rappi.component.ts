import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  ngOnInit() {}

  register() {}

  cancel() {
    this.router.navigate(['home-admin']);
  }
}
