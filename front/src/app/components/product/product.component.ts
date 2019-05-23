import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  count: number;

  @Input('product') product: any;

  constructor(public cartService: CartService) {
    this.count = 1;
  }

  ngOnInit() {}

  add() {
    const quiantity = prompt('Please enter the quantity', 'quantity');
    if (quiantity) {
      try {
        this.cartService.addProduct({
          name: this.product.name,
          description: this.product.description,
          price: this.product.price,
          url_img: this.product.url_img,
          count: parseInt(quiantity, 10)
        });
      } catch (error) {
        alert('An error has ocurred: ' + error);
      }
    } else {
      alert('You have to insert a number');
    }
  }
}
