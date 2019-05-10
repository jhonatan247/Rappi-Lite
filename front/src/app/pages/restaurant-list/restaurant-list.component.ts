import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.sass']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Array<any> = [];
  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.restaurantService
      .getRestaurants()
      .then((restaurants: Array<any>) => {
        this.restaurants = restaurants;
      })
      .catch(error => {
        alert('An error has ocurred: ' + error);
      });
  }
  showRestaurants(restaurant) {
    this.router.navigate(['products/' + restaurant.name + '/' + restaurant.id]);
  }
  goBack() {
    this.router.navigate(['home-user']);
  }
}
