import { Component } from '@angular/core';
import { UserInfo } from '../model/userInfo';
import { UserService } from '../service/user.service';
import { Router, Routes } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  
  submitStatus?:boolean=false;
  
  constructor(private userService:UserService, private routeService:Router,private fb:FormBuilder){}

  registrationForm=this.fb.group({
    email:["",Validators.required],
    password:["",Validators.required],
    name:["",Validators.required]
  })

  get email(){
    return this.registrationForm.get('email')
  }
  get password(){
    return this.registrationForm.get('password')
  }
  get name(){
    return this.registrationForm.get('name')
  }

  addUser(){
    console.log(typeof(this.registrationForm.value))
    this.userService.registerUser(this.registrationForm.value).subscribe({
      next:data=>{
        this.routeService.navigateByUrl("")
        alert("Registered Successfully")
        this.submitStatus=true;
      },error(err) {
        alert("failed")
      },
    })
  }

  canDeactivate() {
    if (!this.submitStatus) {
      this.submitStatus = confirm("Are you sure you want to leave without registration ?");
    }
    return this.submitStatus;
  }
}
