import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserSign } from 'src/app/models/user';
import { from } from 'rxjs';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  
  user : UserSign = { nameOrEmail :'' , password:'' };

  hide:boolean = true;

  constructor( private authService: AuthService  ) { 
  }

  ngOnInit(): void {
  }

  // bind ngModelchange username/email property
  userNameChanged( name:string ){
    this.user.nameOrEmail = name ;
  }
 
  // bind ngModelchange password property
  passwordChanged( password:string ){
    this.user.password = password ;
  }

  // authentication by firebase API account
  onSubmit() {
     // convert from promise to subscribe 
    const subscribe = from( this.authService.SignIn(
      this.user.nameOrEmail,
      this.user.password
    ));
    subscribe.subscribe((result)=>{
      if (result.user) {
        this.authService.SetUserData(result.user);
        this.authService.gotoStore();
      }
    },(error) => {
      window.alert(error.message);
    });

  }
  
  // authentication by google account provider
  googleAnth()
  {
    // convert from promise to subscribe 
    const subscribe = from( this.authService.GoogleAuth() );
    
    subscribe.subscribe((result) => {
      if (result.user) {
        this.authService.SetUserData(result.user);
        this.authService.gotoStore();
      }
    },(error) => {
      window.alert(error.message);
    });
  }



}

