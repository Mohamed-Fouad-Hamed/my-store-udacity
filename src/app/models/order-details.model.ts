

export class OrderDetails  {
    

    id!:number;
    productid!:number;
    productName!:string;
    url!:string;
    price!:number;
    quantity!:number;
    totalProduct!:number;

    constructor (_id:number ,
                 _productID :number ,
                 _productName:string ,
                 _price :number ,
                 _quantity :number,
                 _url : string ){
                    this.id = _id ;
                    this.productid = _productID ;
                    this.productName = _productName;
                    this.price  = _price ;
                    this.quantity = _quantity;
                    this.url = _url ;
                 }

}
