import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-restaurant',
  templateUrl: './select-restaurant.component.html',
  styleUrls: ['./select-restaurant.component.sass']
})
export class SelectRestaurantComponent implements OnInit {
  restaurants: Array<any> = [];
  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.restaurantService.getRestaurants().then((restaurants: Array<any>) => {
      console.log(restaurants);
      this.restaurants = restaurants;
    });
  }
  showRestaurants(restaurant) {
    this.router.navigate(['products/' + restaurant.name + '/' + restaurant.id]);
  }
  goBack() {
    this.router.navigate(['home-user']);
  }
}
