import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countProducts : number ;
  totalOrder : number ;

  constructor( private orderService : OrderService ) {
    this.countProducts = 0 ;
    this.totalOrder = 0 ;
  }

  ngOnInit(): void {
       this.orderService.getOrder().subscribe(order => {
        this.countProducts = order.countProducts();
        this.totalOrder = order.totalOrder();
       });
  }

}
