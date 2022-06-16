import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from '../../components/products/list-products/list-products.component';
import { ProductDetailsComponent } from '../../components/products/product-details/product-details.component';
import { ProductItemComponent } from 'src/app/components/products/product-item/product-item.component';
import { RouterModule  } from '@angular/router';
import { MaterialUiComponentsModule } from '../material-ui-components/material-ui-components.module';

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductDetailsComponent,
    ProductItemComponent
  ],
  exports:[
    ListProductsComponent,
    ProductDetailsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule ,
    RouterModule,
    MaterialUiComponentsModule
  ]
})
export class ProductsModule { }
