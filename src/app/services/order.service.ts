import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { BehaviorSubject ,Observable } from 'rxjs';
import { OrderStorageService } from './orderStorage.service';

@Injectable({
  providedIn: 'root'
})


export class OrderService {
  
  private _orderInfo! : BehaviorSubject<Order> ;

  private _order$! : Observable<Order>;

  constructor( private orderStorageService : OrderStorageService) {
    const order : Order = this.orderStorageService.getOrder();
    this._orderInfo  = new BehaviorSubject<Order>( order );
    this._order$ = this._orderInfo.asObservable();
   }

  getOrder(): Observable<Order>{
    return this._order$ ;
  }

  setOrder(latestValue:Order){
    this.orderStorageService.setOrder(latestValue);
    this._orderInfo.next(latestValue);
  }

  resetService():void{
    this.orderStorageService.resetOrder();
    this.setOrder(new Order());
  }

}
