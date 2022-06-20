import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email : string  ;
  emailPattern : string ;

  constructor( private authService: AuthService) { 
    this.email = '';
    this.emailPattern ='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  }

  ngOnInit(): void {
  }


  emailChanged(_email:string){
    this.email = _email;
  }

  onSubmit()
  {
    this.authService.ForgotPassword(this.email);
  }
}
