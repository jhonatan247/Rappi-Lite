import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.sass']
})
export class RestaurantComponent implements OnInit {
  @Input('restaurant') restaurant: any;
  constructor() {}

  ngOnInit() {}
}
