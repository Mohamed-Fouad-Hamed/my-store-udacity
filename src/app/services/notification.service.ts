import { Injectable } from '@angular/core';
import { 
         MatSnackBar ,
         MatSnackBarHorizontalPosition,
         MatSnackBarVerticalPosition
       } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})


export class NotificationService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor( private readonly snackBar: MatSnackBar) { }

  private openSnackBar(
    message: string,
    action: string,
    className = '',
    duration = 1500
  ) {
    this.snackBar.open(message, action, {

      duration: duration,
      panelClass: [className],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      
    });
  }

  success(message: string) {
    this.openSnackBar(message, '', 'success-snackbar',1500);
  }

}
