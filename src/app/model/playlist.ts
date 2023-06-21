// export type Playlist={
//     playlistName?:String|null,
//     songList?:{
//         songName?:String|null,
//         artistName?:String|null,
//         rating?:String|null
//     }
// }

import { Song } from "./song";

export type Playlist = {
    playlistName?: string|null;
    songList?: Song[]|null; 
}

