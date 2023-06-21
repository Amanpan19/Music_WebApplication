import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName:any;

  constructor(private login:LoginService,private user:UserService){}

  ngOnInit(): void {
     if(this.login.getLoggedIn()===true){
      this.user.getUserName().subscribe({
        next:data=>{
          this.userName=data;
        }
      })
     }
     else{
      this.userName=""
     }
  }

}
