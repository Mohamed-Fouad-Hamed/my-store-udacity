import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
// this is a product list service
export class ListProductsService {

  jsonUrl : string ;

  constructor(private http : HttpClient) {
    // path of list product json file
    this.jsonUrl = '../../../../assets/data/products/data.json';
   }
 
  getListProducts() : Observable<Product[]> {
    // get method of http request to get list product
    return this.http.get<Product[]>(`${this.jsonUrl}`);
  }

}
