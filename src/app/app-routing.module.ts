import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CheckoutComponent } from './components/orders/checkout/checkout.component';
import { ConfirmComponent } from './components/orders/confirm/confirm.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import { SignUpComponent } from './components/users/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/users/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/users/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
                        { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
                        { path: 'sign-in', component: SignInComponent },
                        { path: 'register-user', component: SignUpComponent },
                        { path: 'forgot-password', component: ForgotPasswordComponent },
                        { path: 'verify-email-address', component: VerifyEmailComponent },
                        { path: 'store' , component : ListProductsComponent , canActivate: [AuthGuard]},
                        { path: 'product-details', component: ProductDetailsComponent },
                        { path: 'check-out', component: CheckoutComponent },
                        { path:'confirmation' , component : ConfirmComponent},
                       ];

                       
                       
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
