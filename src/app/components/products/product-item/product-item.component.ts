import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { DatastructureService } from 'src/app/services/datastructure.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  
  @Input() product!: Product;

  private order! : Order ;

  constructor(private orderService : OrderService ,
              private dataStructure : DatastructureService ,
              private notificationService : NotificationService) {
    
   }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe( order => this.order = order ); 
  }


  addNew(quantity:number){
    this.order.addProduct( this.product.id ,
                           this.product.name ,
                           this.product.price ,
                           quantity ,
                           this.product.url  );
    this.orderService.setOrder(this.order);
    const productValue:number = this.product.price * quantity ;
    const message : string ='Added to cart '+ `${quantity}` +' as value : '+ `${productValue.toFixed(2)}` +' total order : '+`${this.order.totalOrder().toFixed(2)}`;
     //window.alert(message);
     this.notificationService.success(message);                       
  }

  counterArray = (i:number) =>{
    return this.dataStructure.counter(i);
  }
  
}
