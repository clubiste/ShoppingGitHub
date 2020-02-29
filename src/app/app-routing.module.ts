import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'product' , component : ProductComponent},
  {path:'orders' , component : MyOrdersComponent},
  {path:'admin/orders' , component : AdminOrdersComponent},
  {path:'admin/products' , component : AdminProductsComponent},
  {path:'shopping-cart' , component : ShoppingCartComponent},
  {path:'login' , component : LoginComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
