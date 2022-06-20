import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastructureService {
  // generate array of number to fill select
  counter = (n: number) => {
    let arr = [] ;
    for(let i = 2 ; i <= n ; i++ )
        arr.push(i);
    return arr;
  }

}
