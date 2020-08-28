import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CheckOutComponent } from './components/pages/check-out/check-out.component';
import { OrderSuccessComponent } from './components/pages/order-success/order-success.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';


// Routes 
const routes: Routes = [
  // Normal users
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'checkout', component: CheckOutComponent},
  { path: 'order-success', component: OrderSuccessComponent},
  { path: 'login', component: LoginComponent},

  // admin users 
  { path: 'admin/products', component: AdminProductsComponent},
  { path: 'admin/orders', component: AdminOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
