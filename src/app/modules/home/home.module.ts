import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home/home.component';
import { RouterModule  } from '@angular/router';
import { MaterialUiComponentsModule } from '../material-ui-components/material-ui-components.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialUiComponentsModule
  ]
})
export class HomeModule { }
