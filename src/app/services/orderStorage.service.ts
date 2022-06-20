import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
/*
This is a service outside of requirements and suggestions
As it saves the shopping cart data in local storage
Which allows to activate the page or even close 
the browser and reopen it to find what you have purchased in your cart.

Note: 
This data is reset in the event of confirmation of purchase or logout  
 */
export class OrderStorageService {

  private orderKey : string = 'order';

  setOrder( order :Order ) : void {

    const instanceString = JSON.stringify( order );

    localStorage.setItem( this.orderKey , instanceString );
  }

  getOrder() : Order {
    
    const orderString = localStorage.getItem(this.orderKey); 

    const order : Order = orderString ?  JSON.parse(orderString) as Order : new Order() ;
    
    return order ;

  }

  resetOrder(){
    this.setOrder( new Order() );
  }

  
  

}
