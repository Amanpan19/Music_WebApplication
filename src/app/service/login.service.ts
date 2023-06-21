import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn:boolean=false;

  constructor() { }

  onSuccess(){
      this.isLoggedIn=true;
  }
  onFailure(){
      this.isLoggedIn=false;
  }
  getLoggedIn(){
      return this.isLoggedIn;
  }
}
