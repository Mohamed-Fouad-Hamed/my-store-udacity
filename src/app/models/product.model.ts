export class Product {
    id: number;
    name: string;
    price : number;
    url: string;
    description:string;

    constructor(_id:number ,
                _name:string,
                _price:number,
                _url:string,
                _description:string){
                    this.id=_id;
                    this.name=_name;
                    this.price=_price;
                    this.url=_url;
                    this.description=_description;
                }
}
