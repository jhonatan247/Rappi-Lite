import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  acceptTerms: boolean;
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    this.router.navigate(['']);
  }

  signUp() {
    this.router.navigate(['']);
  }
}
