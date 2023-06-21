import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: ['./show-playlist.component.css']
})
export class ShowPlaylistComponent implements OnInit {

  playlistAvail:any;
  
  
constructor(private userSer:UserService,private router:Router){}

  ngOnInit(): void {
    this.userSer.getPlayList().subscribe({
      next:data=>{
        // console.log(data);
        
        this.playlistAvail=data;
      }
    })
  }

  deletePlaylist(playlistName:any){
    this.userSer.deletePlaylist(playlistName).subscribe({
      next:data=>{
        alert("deleted successfully!!!!")
        this.router.navigateByUrl("/song")
      },error(err) {
        alert("not deleted")
      },
    })
  }

}
