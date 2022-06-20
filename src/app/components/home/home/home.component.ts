import { Component, OnInit , NgZone } from '@angular/core';
import { OrderHelper } from 'src/app/models/order-helper';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countProducts : number ;
  totalOrder : number ;
  
  constructor( 
              private orderService : OrderService , 
              private authService : AuthService ,
              private router:Router,
              private nZone : NgZone
              ) {
    this.countProducts = 0 ;
    this.totalOrder = 0 ;
  }

  ngOnInit(): void {
       this.orderService.getOrder().subscribe(order => {
            let helper:OrderHelper = new OrderHelper(order);
            this.countProducts = helper.countProducts();
            this.totalOrder = helper.totalOrder();
       });
  }

  goStore(){
    this.router.navigate(['store']);
  }

  goSignIn(){
    this.router.navigate(['sign-in']);
  }

  goSignUp(){
    this.router.navigate(['register-user']);
  }

  signOut():void{

    this.authService.SignOut().then(()=>{
      this.nZone.run(()=>{
        this.authService.checkState();
        this.orderService.resetService();
        this.router.navigate(['sign-in']);
      });
     }).catch((err)=>{console.log(err)});

  }

  get user() {
    return this.authService.userData ;
  }



}
