import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { OrderDetails } from 'src/app/models/order-details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  order! : Order ;

  constructor(private orderService : OrderService,private router : Router ) {
   }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe( order => this.order = order ); 
  }


  updateDetail(detail : OrderDetails , quantity:number){

    this.order.addProduct( detail.productid ,
                           detail.productName ,
                           detail.price ,
                           quantity ,
                           detail.url  );
    this.orderService.setOrder(this.order);  

  }

  onSubmit(){
    this.router.navigate(['confirmation']);
  }

}
