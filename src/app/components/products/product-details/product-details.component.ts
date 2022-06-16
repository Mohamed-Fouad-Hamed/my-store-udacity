import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { DatastructureService } from 'src/app/services/datastructure.service';
import { OrderService } from 'src/app/services/order.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product!: Product;

  private order! : Order ;

  constructor(private orderService : OrderService ,
              private router : ActivatedRoute ,
              private dataStructure : DatastructureService ,
              private notificationService:NotificationService) { }

  ngOnInit(): void {

    this.orderService.getOrder().subscribe( order => this.order = order ); 

    this.router.queryParams.subscribe(params => { 
      this.product = <Product> params;
    });

  }

  addNew(quantity:number){
    this.order.addProduct( this.product.id ,
                           this.product.name ,
                           this.product.price ,
                           quantity ,
                           this.product.url  );
    this.orderService.setOrder(this.order); 
    const productValue:number = +this.product.price * quantity ;
    const message : string ='Added to cart '+ `${quantity}` +' as value : '+ `${productValue.toFixed(2)}` +' total order : '+`${this.order.totalOrder().toFixed(2)}`;
    //window.alert(message);
     this.notificationService.success(message);                      
  }

  counterArray = (i:number) =>{
    return this.dataStructure.counter(i);
  }

}
