import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from '../../components/orders/order/order.component';
import { CheckoutComponent } from '../../components/orders/checkout/checkout.component';
import { ConfirmComponent } from '../../components/orders/confirm/confirm.component';
import { FormsModule } from '@angular/forms';
import { MaterialUiComponentsModule } from '../material-ui-components/material-ui-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderComponent,
    CheckoutComponent,
    ConfirmComponent
  ],
  exports:[
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    RouterModule,
    MaterialUiComponentsModule
  ]
})
export class OrdersModule { }
