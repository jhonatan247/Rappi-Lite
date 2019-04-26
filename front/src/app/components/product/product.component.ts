import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  @Input('product') product: any;
  count: number;

  constructor(public cartService: CartService) {
    this.count = 1;
  }

  ngOnInit() {}

  add() {
    this.cartService.addProduct({
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      url_img: this.product.utl_img,
      count: this.count
    });
  }
}
