import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-rappi',
  templateUrl: './home-rappi.component.html',
  styleUrls: ['./home-rappi.component.sass']
})
export class HomeRappiComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  signOut() {
    this.router.navigate(['']);
  }
}
