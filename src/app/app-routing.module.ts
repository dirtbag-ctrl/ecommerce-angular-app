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
import { MyOrdersComponent } from './components/pages/my-orders/my-orders.component';

// Services 
import { AdminGuardAuthService } from './services/admin-guard-auth.service';
import { AuthGuardService } from './services/auth-guard.service';



// Routes 
const routes: Routes = [
  // Anonymous users
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },

  // Normal Users
  { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuardService] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

  // admin users 
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuardService, AdminGuardAuthService]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuardService, AdminGuardAuthService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
