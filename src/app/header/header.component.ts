import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  title:String="Spotify";
  type:String="login";
  flag:boolean=false;
  constructor(private route:Router,private logService:LoginService){}


  clicked(){

    if(this.type==="login"){
      this.type="logout"

    }
    else{
      this.route.navigateByUrl("/song")
      this.logService.onFailure();
      localStorage.clear();
      this.type="login"
    }
  }

}

