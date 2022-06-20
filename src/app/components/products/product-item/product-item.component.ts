import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { DatastructureService } from 'src/app/services/datastructure.service';
import { NotificationService } from 'src/app/services/notification.service';
import { OrderHelper } from 'src/app/models/order-helper';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  
  @Input() product!: Product;

  @Output() eventEmitterMessage : EventEmitter<string> = new EventEmitter();

  private order! : Order ;

  private helper! : OrderHelper ;

  constructor(private orderService : OrderService ,
              private dataStructure : DatastructureService ) {
    
   }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe( order => this.order = order ); 
    this.helper = new OrderHelper(this.order);
  }

  counterArray = (i:number) =>{
    return this.dataStructure.counter(i);
  }

  addNew(quantity:number){

    const message : string = this.helper.addProduct( this.product.id ,
                                                    this.product.name ,
                                                    this.product.price ,
                                                    quantity ,
                                                    this.product.url  );

    this.orderService.setOrder(this.order);

    this.eventEmitterMessage.emit(message); 

  }

 
  
  

}
