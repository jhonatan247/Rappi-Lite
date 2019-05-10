import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
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
    this.productService
      .getProducts(this.rid)
      .then(products => {
        this.products = products;
      })
      .catch(error => {
        alert('An error has ocurred: ' + error);
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
