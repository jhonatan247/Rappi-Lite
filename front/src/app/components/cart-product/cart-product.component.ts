import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.sass']
})
export class CartProductComponent implements OnInit {
  @Input('product') product: any;
  constructor() {}

  ngOnInit() {}
}
