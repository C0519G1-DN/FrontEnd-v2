import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInformationComponent } from './components/user/user-information/user-information.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { SongUploadComponent } from './components/song/song-upload/song-upload.component';
import { HomeComponent } from './components/layout/home/home.component';
import { MyContributionComponent } from './components/layout/my-contribution/my-contribution.component';
import { PlaylistLikeComponent } from './components/playlist/playlist-like/playlist-like.component';
import { PlaylistViewsComponent } from './components/playlist/playlist-views/playlist-views.component';
import { PlaylistBlockComponent } from './components/playlist/playlist-block/playlist-block.component';
import { PlaylistAddComponent } from './components/playlist/playlist-add/playlist-add.component';
import { SongBlockComponent } from './components/song/song-block/song-block.component';
import { SongLikeComponent } from './components/song/song-like/song-like.component';
import { SongViewsComponent } from './components/song/song-views/song-views.component';
import { UserChangepassComponent } from './components/user/user-changepass/user-changepass.component';
import { SingerAddComponent } from './components/singer/singer-add/singer-add.component';
import { SingerInformationComponent } from './components/singer/singer-information/singer-information.component';
import { ForgetPassComponent } from './components/feature/forget-pass/forget-pass.component';


import { PlaylistEditComponent } from './components/playlist/playlist-edit/playlist-edit.component';
import { SongEditComponent } from './components/song/song-edit/song-edit.component';
// import { PlaylistInfoComponent } from './components/playlist/playlist-info/playlist-info.component';
import { SingerListComponent } from './components/singer/singer-list/singer-list.component';
import { PlaylistAddSongComponent } from './components/playlist/playlist-add-song/playlist-add-song.component';
import { LogoutComponent } from './components/feature/logout/logout.component';
import { SearchComponent } from './components/feature/search/search.component';
import { TempComponent } from './components/feature/temp/temp.component';
import { PlaylistInfoComponent } from './components/playlist/playlist-info/playlist-info.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'temp',
    component: TempComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'register',
    component: UserRegisterComponent,
  },
  {
    path:'forget-pass',
    component: ForgetPassComponent,
  },
  {
    path: 'update',
    component: UserUpdateComponent,
  },
  {
    path: 'my-profile',
    component: UserInformationComponent,
  },
  {
    path: 'my-contribution',
    component: MyContributionComponent,
  },
  {
    path: 'playlist-listening',
    component: PlaylistBlockComponent,
  },
  {
    path: 'playlist-like',
    component: PlaylistLikeComponent,
  },
  {
    path: 'playlist-views',
    component: PlaylistViewsComponent,
  },
  {
    path: 'playlist-add',
    component: PlaylistAddComponent,
  },
  {
    path: 'playlist-info',
    component: PlaylistInfoComponent,
  },
  {
    path: 'playlist-addsong',
    component: PlaylistAddSongComponent
  },
  {
    path: 'playlist-edit',
    component: PlaylistEditComponent,
  },
  {
    path: 'song-listening',
    component: SongBlockComponent,
  },
  {
    path: 'song-like',
    component: SongLikeComponent,
  },
  {
    path: 'song-views',
    component: SongViewsComponent,
  },
  {
    path: 'song-upload',
    component: SongUploadComponent,
  },
  {
    path: 'change-password',
    component: UserChangepassComponent,
  },
  {
    path: 'singer-add',
    component: SingerAddComponent,
  },
  {
    path: 'singer-infor',
    component: SingerInformationComponent,
  },
  {
    path: 'singer-list',
    component: SingerListComponent,
  },
  {
    path: 'song-edit',
    component: SongEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
