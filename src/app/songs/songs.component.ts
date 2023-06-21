import { Component, OnInit } from '@angular/core';
import { SongService } from '../service/song.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit{

  songs:any;
  isDisabled=true;
  userName:any="";
  flag:boolean=false;

  constructor(private songSer:SongService,private logser:LoginService,private router:Router,private userSer:UserService){}

  get loggedIn(){
    return this.logser.getLoggedIn();
  }

  ngOnInit(){

    this.songSer.getAllSongs().subscribe({
      next:data=>{
        this.songs=data;
      },error(err) {
        alert("Not able to Load...")
      },
    })
    if(this.logser.getLoggedIn()){
      this.isDisabled=false;
   }

   if(this.loggedIn){
    this.userSer.getUserName().subscribe({
      next:data=>{
        console.log(data);
        this.userName=data;
        this.userSer.userName=this.userName.name;
        console.log(this.userSer.userName);
        
        console.log(this.userName);
        this.flag=true;
      }
    })
  }
  this.userSer.getSong=null;
  }

  songPlay(name:String){
    
    alert(`${name} is Playing `);
  }

  goToPlaylist(song:any){
    this.userSer.getSong=song;
    const btn:HTMLElement|null=document.getElementById("add");
    btn?.setAttribute("style", "background-color: red");
    alert(`${song.songName} Song is selected`)
    this.router.navigateByUrl("/playlist")
  }
}
