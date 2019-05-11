import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { HomeRappiComponent } from './pages/home-rappi/home-rappi.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { RegisterRappiComponent } from './pages/register-rappi/register-rappi.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { InsertAddressComponent } from './pages/insert-address/insert-address.component';
import { RestaurantListComponent } from './pages/restaurant-list/restaurant-list.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { SelectCountModalComponent } from './components/select-count-modal/select-count-modal.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { RestaurantService } from './services/restaurant/restaurant.service';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { CurrentOrderComponent } from './pages/current-order/current-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeUserComponent,
    HomeRappiComponent,
    HomeAdminComponent,
    RegisterRappiComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    RestaurantComponent,
    InsertAddressComponent,
    RestaurantListComponent,
    ProductListComponent,
    CartComponent,
    CartProductComponent,
    SelectCountModalComponent,
    OrderListComponent,
    CurrentOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule {}
