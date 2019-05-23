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
  restaurantId: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.restaurantName = this.route.snapshot.params.rname;
    this.restaurantId = this.route.snapshot.params.id;
    this.productService
      .getProducts(this.restaurantId)
      .then(products => {
        this.products = products.list;
      })
      .catch(error => {
        alert('An error has ocurred: ' + error.toString());
      });
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['restaurants']);
  }
  showCart() {
    this.router.navigate([`cart/${this.restaurantName}/${this.restaurantId}`]);
  }
}
