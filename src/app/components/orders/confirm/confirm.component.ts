import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { OrderHelper } from 'src/app/models/order-helper';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  order! : Order ;
  helper! : OrderHelper;

  constructor(private orderService : OrderService , private router : Router ) {
   }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe( order => this.order = order ); 
    this.helper = new OrderHelper(this.order);
  }

  resetOrder(){
  
    this.orderService.resetService();
    this.router.navigate(['/store']);
  }

}
