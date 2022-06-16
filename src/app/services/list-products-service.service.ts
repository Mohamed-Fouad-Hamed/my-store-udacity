import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  jsonUrl : string ;

  constructor(private http : HttpClient) {
    this.jsonUrl = '../../../../assets/data/products/data.json';
   }
 
  getListProducts() : Observable<any> {
    return this.http.get(`${this.jsonUrl}`);
  }

}
