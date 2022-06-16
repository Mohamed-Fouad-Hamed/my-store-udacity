import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home/home.component';
import { RouterModule  } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
