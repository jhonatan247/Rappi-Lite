import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  products: any;
  total: any;
  constructor(private router: Router, private cartService: CartService) {
    this.products = cartService.getProducts();
    this.total = cartService.getTotal();
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['restaurants']);
  }
}
