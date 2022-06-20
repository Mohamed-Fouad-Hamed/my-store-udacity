import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiComponentsModule } from '../material-ui-components/material-ui-components.module';
import { SignInComponent } from '../../components/users/sign-in/sign-in.component';
import { ForgotPasswordComponent } from '../../components/users/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/users/verify-email/verify-email.component';
import { SignUpComponent } from '../../components/users/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
       SignInComponent,
       ForgotPasswordComponent,
       VerifyEmailComponent,
       SignUpComponent

  ],
  imports: [
    CommonModule,
    MaterialUiComponentsModule,
    FormsModule,
    RouterModule
  ]
})
export class UsersModule { }
