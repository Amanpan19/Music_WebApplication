import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Playlist } from '../model/playlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit{

  playlist:Playlist={}
  playlistAvail:any;
  songs:any;



constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}

songName1 = this.userService.getSong ? this.userService.getSong.songName : '';
artistName1 = this.userService.getSong ? this.userService.getSong.artistName : '';
rating = this.userService.getSong ? this.userService.getSong.rating : '';

  ngOnInit(): void {
   
  //  console.log( this.userService.getSong.songName);
   
   this.userService.getPlayList().subscribe({
    next:data=>{
            this.playlistAvail=data;
            
    }
  
   })
   console.log(this.playlistAvail);

  this.songName1 = '';
  this.artistName1 = '';
  this.rating = '';
   
  }



  addPlaylist = this.fb.group({
    playlistName:["",Validators.required],
    songList:this.fb.array([
      this.fb.group({
        songName:  [this.songName1],
        artistName: [this.artistName1],
        rating: [this.rating]
  })   
    ])
  })
resetForm(){
  this.addPlaylist.reset();
}

  submitPlaylist(){
    this.userService.createPlaylist(this.addPlaylist.value).subscribe({
      next:data=>{
         this.playlist=data;
         alert("added successfully");
        this.router.navigateByUrl("/show")
      },error(err) {
        alert("Not added");
      },
    })
    this.addPlaylist.reset();
  }

  

}

