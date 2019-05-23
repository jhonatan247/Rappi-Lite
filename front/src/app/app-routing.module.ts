import { CustomerAuthenticationGuard } from './guards/customer-authentication/customer-authentication.guard';
import { AdminAuthenticationGuard } from './guards/admin-authentication/admin-authentication.guard';
import { HomeRappiComponent } from './pages/home-rappi/home-rappi.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterRappiComponent } from './pages/register-rappi/register-rappi.component';
import { RestaurantListComponent } from './pages/restaurant-list/restaurant-list.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { InsertAddressComponent } from './pages/insert-address/insert-address.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShopkeeperAuthenticationGuard } from './guards/shopkeeper-authentication/shopkeeper-authentication.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'register-rappi',
    component: RegisterRappiComponent,
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: 'home-user',
    component: HomeUserComponent,
    canActivate: [CustomerAuthenticationGuard]
  },
  {
    path: 'home-admin',
    component: HomeAdminComponent,
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: 'home-rappi',
    component: HomeRappiComponent,
    canActivate: [ShopkeeperAuthenticationGuard]
  },
  {
    path: 'restaurants',
    component: RestaurantListComponent,
    canActivate: [CustomerAuthenticationGuard]
  },
  {
    path: 'orders',
    component: OrderListComponent,
    canActivate: [ShopkeeperAuthenticationGuard]
  },
  {
    path: 'products/:rname/:id',
    component: ProductListComponent,
    canActivate: [CustomerAuthenticationGuard]
  },
  {
    path: 'address',
    component: InsertAddressComponent,
    canActivate: [CustomerAuthenticationGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [CustomerAuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
