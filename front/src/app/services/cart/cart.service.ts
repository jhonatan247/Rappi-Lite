import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: any = [];
  total: any = 0;
  constructor() {}
  getProducts() {
    return this.products;
  }
  getTotal() {
    return this.total;
  }
  addProduct(product) {
    this.products.push(product);
    this.total += product.price * product.count;
  }
}
