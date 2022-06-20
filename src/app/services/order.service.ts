import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { BehaviorSubject ,Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private _orderInfo! : BehaviorSubject<Order> ;

  private _order$! : Observable<Order>;

  constructor( private localStorgeService : LocalstorageService) {
    const order : Order = this.localStorgeService.getOrder();
    this._orderInfo  = new BehaviorSubject<Order>( order );
    this._order$ = this._orderInfo.asObservable();
   }

  getOrder(): Observable<Order>{
    return this._order$ ;
  }

  setOrder(latestValue:Order){
    this.localStorgeService.setOrder(latestValue);
    this._orderInfo.next(latestValue);
  }

  resetService():void{
    this.localStorgeService.resetOrder();
    this.setOrder(new Order());
  }

}
