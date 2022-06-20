import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , NavigationEnd, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { DatastructureService } from 'src/app/services/datastructure.service';
import { OrderService } from 'src/app/services/order.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Product } from 'src/app/models/product.model';
import { OrderHelper } from 'src/app/models/order-helper';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product!: Product;

  private order! : Order ;

  private helper! : OrderHelper ;

  constructor(private orderService : OrderService ,
              private activedRouter : ActivatedRoute ,
              private dataStructure : DatastructureService ,
              private notificationService:NotificationService ) {
              
              }

  ngOnInit(): void {

    this.orderService.getOrder().subscribe( order => this.order = order ); 

    this.activedRouter.queryParams.subscribe(params => { 
      this.product = <Product> params;
    });

    this.helper = new OrderHelper(this.order);

  }

  addNew(quantity:number){
    const message : string = this.helper.addProduct(   +this.product.id ,
                                                      this.product.name ,
                                                      +this.product.price ,
                                                      quantity ,
                                                      this.product.url  );
    this.orderService.setOrder(this.order); 
  
    this.notificationService.success(message);                      
  }

  counterArray = (i:number) =>{
    return this.dataStructure.counter(i);
  }

}
