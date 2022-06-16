import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CheckoutComponent } from './components/orders/checkout/checkout.component';
import { ConfirmComponent } from './components/orders/confirm/confirm.component';

const routes: Routes = [
                        { path: '', component: ListProductsComponent },
                        { path: 'product-details', component: ProductDetailsComponent },
                        { path: 'check-out', component: CheckoutComponent },
                        { path:'confirmation' , component : ConfirmComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
