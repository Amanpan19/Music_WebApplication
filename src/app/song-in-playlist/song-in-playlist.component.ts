import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-song-in-playlist',
  templateUrl: './song-in-playlist.component.html',
  styleUrls: ['./song-in-playlist.component.css']
})
export class SongInPlaylistComponent implements OnInit{
  songData:any;
  

constructor(private userSer:UserService,private fb:FormBuilder){}

  ngOnInit(): void {
  
  }
  
  
formList = this.fb.group({
  playlistName:["",Validators.required]
})

get playlistName (){
  return this.formList.get('playlistName')
}

getSong(){
  
  this.userSer.getSongsFromPlaylist(this.playlistName?.value).subscribe({
    next:data=>{
      this.songData=data;
    }
   })

}
  songPlay(name:String){
    
    alert(`${name} is Playing `);
  }

}
