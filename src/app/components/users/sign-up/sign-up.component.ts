import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserSign } from 'src/app/models/user';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user : UserSign = { nameOrEmail :'' , password:'' };

  hide : boolean = true ;

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

  // sign up to firebase API account
  onSubmit() {
    // convert from promise to subscribe
    const subscribe = from( this.authService.SignUp(
      this.user.nameOrEmail,
      this.user.password
    ));

    subscribe.subscribe((result)=>{
      if (result.user) {
        this.authService.SetUserData(result.user);
        this.authService.SendVerificationMail();
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
