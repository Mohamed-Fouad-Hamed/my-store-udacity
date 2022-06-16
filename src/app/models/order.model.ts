import { OrderDetails } from "./order-details.model";

export class Order {

  id!:number ;
  fullName!:string;
  address!:string;
  creditCard!: string;
  orderDetail!:OrderDetails[];

  constructor(  ){
    this.id = 1 ;
    this.orderDetail = [] ;
  }

  // get next generate ID 
  nextIndex = () =>{

    let count : number = !this.orderDetail.length || this.orderDetail.length === 0 ? 1 : this.orderDetail.length + 1 ;
   
    return count;
    
  }
 // calc all quantity of all products in order 
  countProducts = () => {
    let count : number = 0 ;
    this.orderDetail.forEach(i => {
       count += i.quantity ;
    });
    return count;
  }
  // calc total amount
  totalOrder = () => {
    let total : number = 0 ;
    this.orderDetail.forEach(i => {
        i.totalOrderDetail();
        total += i.totalProduct;
    });
    return total ;
  }

  /* this method update quantity and delete product when quantity less than 1  */
  addProduct( productID : number , productName : string , price : number, quantity :number  , url :string  ) : void {
    
        const detail : OrderDetails | undefined = this.orderDetail.find(i => i.productid === productID);
    
        if( detail ){
    
             if( quantity < 1 ) {
    
                this.orderDetail = this.orderDetail.filter( i => i.productid !== productID );
             }
             else {
               
               detail.quantity = quantity ;
               this.totalOrder();
    
             }
        }
        else
        {
             const newDetail = new OrderDetails(this.nextIndex(),
                                                 productID,
                                                 productName,
                                                 price,
                                                 quantity,
                                                 url,
                                                 );
             this.orderDetail.push(newDetail);  
                                              
        } 
        
        
  }

  

}
