import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SongsComponent } from './songs/songs.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { DeactiveGuard } from './guard/deactive.guard';
import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';
import { SongInPlaylistComponent } from './song-in-playlist/song-in-playlist.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent,canDeactivate:[DeactiveGuard]},
  // {path:"playlist",component:PlaylistComponent},
  {path:"playlist",component:PlaylistComponent,canActivate:[AuthguardGuard]},
  // {path:"show",component:ShowPlaylistComponent},
  {path:"show",component:ShowPlaylistComponent,canActivate:[AuthguardGuard]},
  // {path:"songInPlaylist",component:SongInPlaylistComponent},
  {path:"songInPlaylist",component:SongInPlaylistComponent,canActivate:[AuthguardGuard]},
  {path:"song",component:SongsComponent},
  {path:"**",component:SongsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
