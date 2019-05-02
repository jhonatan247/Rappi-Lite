import { HomeRappiComponent } from './pages/home-rappi/home-rappi.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterRappiComponent } from './pages/register-rappi/register-rappi.component';
import { SelectRestaurantComponent } from './pages/select-restaurant/select-restaurant.component';
import { InsertAddressComponent } from './pages/insert-address/insert-address.component';
import { SelectProductsComponent } from './pages/select-products/select-products.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'register-rappi', component: RegisterRappiComponent },
  { path: 'home-user', component: HomeUserComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'home-rappi', component: HomeRappiComponent },
  { path: 'restaurants', component: SelectRestaurantComponent },
  { path: 'products/:rname/:id', component: SelectProductsComponent },
  { path: 'address', component: InsertAddressComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
