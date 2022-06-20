import { OrderDetails } from "./order-details.model";
import { Order } from "./order.model";

// this class has functions of order class
export class OrderHelper {

   order : Order ;

   constructor(_order : Order){
    this.order = _order ;
   }
  
   get currentOrder():Order{
    return this.order;
   }


    // get next generate ID 
  nextIndex = () =>{

    let count : number = !this.order.orderDetail.length || this.order.orderDetail.length === 0 ? 1 : this.order.orderDetail.length + 1 ;
   
    return count;
    
  }
 // calc all quantity of all products in order 
  countProducts = () => {
    let count : number = 0 ;
    this.order.orderDetail.forEach(i => {
       count += i.quantity ;
    });
    return count;
  }
  // calc total amount
  totalOrder = () => {
    let total : number = 0 ;
    this.order.orderDetail.forEach(i => {
        this.totalProduct(i);
        total += i.totalProduct;
    });
    return total ;
  }

  /* this method update quantity and delete product 
     when quantity less than 1  and 
     return Message Product Status */
  addProduct( productID : number ,
              productName : string ,
              price : number,
              quantity :number,
              url :string  ) : string {
    
        let messageProductStatus : string = '' ; 
        
        const detail : OrderDetails | undefined = <OrderDetails> this.order.orderDetail.find(i => i.productid === productID);

        if( detail ){
    
             if( quantity < 1 ) {
    
                this.order.orderDetail = this.order.orderDetail.filter( i => i.productid !== productID );

                messageProductStatus = 'Deleted product name '+ `${productID}`;
             }
             else {
               
               detail.quantity = quantity ;
                
               messageProductStatus = 'Added to cart '+ `${quantity}` +' as value : '+ `${detail.totalProduct.toFixed(2)}` +' total order : '+`${this.totalOrder().toFixed(2)}`;
    
             }
        }
        else
        {
            let newDetail = new OrderDetails(this.nextIndex(),
                                                 productID,
                                                 productName,
                                                 price,
                                                 quantity,
                                                 url,
                                                 );
             this.totalProduct(newDetail);                                    

             this.order.orderDetail.push( newDetail); 
             
             

             messageProductStatus = 'Added to cart '+ `${quantity}` +' as value : '+ `${newDetail.totalProduct.toFixed(2)}` +' total order : '+`${this.totalOrder().toFixed(2)}`;
               
             
        } 

        return messageProductStatus ;  
  }

   
  private totalProduct ( detail:OrderDetails):void{
    detail.totalProduct = detail.price * detail.quantity ;
  }


}
