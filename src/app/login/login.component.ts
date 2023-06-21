import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  responseData:any;
  login={
    email:"",
    password:""
  }

  constructor(private userService:UserService, private _snackBar:MatSnackBar,private routeService:Router,private logSer:LoginService){}

  loginCheck(){
    this.userService.login(this.login).subscribe({
      next:data=>{
          this.responseData=data;
          console.log(this.responseData);
          
          localStorage.setItem('Token',this.responseData.Token)

        this._snackBar.open('Logged In successfully.....', 'success', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.logSer.onSuccess(); //true
        this.routeService.navigateByUrl("");
        
      },error:err=>{
        this.logSer.onFailure(); //false
        alert("Look's like your are not ragistered!!!!");
        this.routeService.navigateByUrl("/registration")
      }
    })
  }
}
