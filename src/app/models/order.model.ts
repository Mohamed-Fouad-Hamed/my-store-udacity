
import { OrderDetails } from "./order-details.model";

export class Order{

 
  id!:number ;
  fullName!:string ;
  address!:string;
  creditCard!: string;
  orderDetail!:OrderDetails[];

  constructor(  ){
    this.id = 1 ;
    this.fullName = '';
    this.address='';
    this.creditCard='';
    this.orderDetail = [];
  }

}
