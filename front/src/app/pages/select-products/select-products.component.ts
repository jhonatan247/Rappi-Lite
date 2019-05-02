import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-select-products',
  templateUrl: './select-products.component.html',
  styleUrls: ['./select-products.component.sass']
})
export class SelectProductsComponent implements OnInit {
  restaurantName: string;
  products: Array<any>;
  rid: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.restaurantName = this.route.snapshot.params['rname'];
    this.rid = this.route.snapshot.params['id'];
    this.productService.getProducts(this.rid).then(products => {
      this.products = products;
    });
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['restaurants']);
  }
  showCart() {
    this.router.navigate(['cart']);
  }
}
