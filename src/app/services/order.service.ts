import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { BehaviorSubject ,Observable } from 'rxjs';
import { ConfigurableFocusTrap } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private _orderInfo! : BehaviorSubject<Order> ;

  private _order$! : Observable<Order>;

  constructor() {
    this._orderInfo  = new BehaviorSubject<Order>( new Order() );
    this._order$ = this._orderInfo.asObservable();
   }

  getOrder(): Observable<Order>{
    return this._order$ ;
  }

  setOrder(latestValue:Order){
    this._orderInfo.next(latestValue);
  }

  

  resetService():void{
    this.setOrder(new Order());
  }

}
