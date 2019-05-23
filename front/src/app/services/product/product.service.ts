import { ConfigurationService } from './../configuration/configuration.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<any>;
  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) {}

  getProducts(rid) {
    return this.http
      .get<any>(
        `http://localhost:3000/api/restaurant/products-list?restaurant_id=${rid}`,
        this.configurationService.getOptionsWithAuthorization()
      )
      .toPromise();
  }
}
