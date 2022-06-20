import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { OrderDetails } from 'src/app/models/order-details.model';
import { Router } from '@angular/router';
import { OrderHelper } from 'src/app/models/order-helper';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


   order! : Order ;
   helper! : OrderHelper ;

  constructor(private orderService : OrderService ,
              private router : Router ,
              private authService : AuthService ) {
    
   }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe( order => this.order = order ); 
    this.helper = new OrderHelper(this.order);
    this.order.fullName = this.authService.userName ;
  }

  fullNameChanged(fullname:string){
    this.order.fullName = fullname
  }

  addressChanged(address:string){
    this.order.address = address;
  }

  creditCardNumberChanged(creditCardNumber:string){
    this.order.creditCard = creditCardNumber ;
  }

  updateDetail(detail : OrderDetails , quantity:number){

    this.helper.addProduct( detail.productid ,
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
