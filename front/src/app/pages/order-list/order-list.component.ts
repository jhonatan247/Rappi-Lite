import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.sass']
})
export class OrderListComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['home-rappi']);
  }

}
