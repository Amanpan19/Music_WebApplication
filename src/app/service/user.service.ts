import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../model/playlist';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  Authurl:String="http://localhost:9000";
  userUrl:String="http://localhost:8090";

  public userName?:String;

  public getSong:any={};

  login(loginData:any){
  
    console.log(loginData);
    
    return this.httpClient.post(`${this.Authurl}/api/authApp/login`,loginData)
  }

  getPlayList():Observable<Array<Playlist>>{
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    console.log(reqOption);

    return this.httpClient.get<Array<Playlist>>(`${this.userUrl}/api/userService/get/playlist`,reqOption)
    
  }

  registerUser(user:any){
    return this.httpClient.post(`${this.userUrl}/api/userService/add-user`,user)
  }

  createPlaylist(playlist:any){

    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    console.log(reqOption);
    console.log(playlist)
    return this.httpClient.post(`${this.userUrl}/api/userService/add/Playlist`,playlist,reqOption)

  }

  getUserName(){
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    return this.httpClient.get(`${this.userUrl}/api/userService/get/name`,reqOption)
  }

  getSongsFromPlaylist(playlistName:any){
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    return this.httpClient.post(`${this.userUrl}/api/userService/get/songList?playlistName=${playlistName}`,{},reqOption)
  }

  deletePlaylist(playlistName:any){
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    return this.httpClient.delete(`${this.userUrl}/api/userService/delete/playlist?playlistName=${playlistName}`,reqOption)
  }

}
