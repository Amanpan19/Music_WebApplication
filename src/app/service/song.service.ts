import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpReq:HttpClient) { }

  songsUrl:String="http://localhost:6262/songs/list"

  getAllSongs(){
   return this.httpReq.get(`${this.songsUrl}/get/all-songs`);
  }
}
