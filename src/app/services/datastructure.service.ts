import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastructureService {
  
  counter = (n: number) => {
    let arr = [] ;
    for(let i = 2 ; i <= n ; i++ )
        arr.push(i);
    return arr;
  }

}
