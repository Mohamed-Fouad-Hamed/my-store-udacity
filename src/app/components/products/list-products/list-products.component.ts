import { Component, OnInit , Input} from '@angular/core';
import { ListProductsService } from 'src/app/services/list-products-service.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts : Product[] ;

  constructor (private _service : ListProductsService) {

    this.listProducts = [];

  }

  ngOnInit(): void {
    this._service.getListProducts().subscribe( _products => {  
      for(let i = 0 ; i < _products.length ; i++ ){
         const _product : Product  = new Product(
            _products[i].id ,
            _products[i].name,
            _products[i].price,
            _products[i].url,
            _products[i].description
            );
            this.listProducts.push(_product);
          }
            },(error) =>{ 
                 console.log('catch',error);
               }
            );
  }
    
  

}
