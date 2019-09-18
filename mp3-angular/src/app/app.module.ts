import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInformationComponent } from './components/user/user-information/user-information.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { SongUploadComponent } from './components/song/song-upload/song-upload.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BodyComponent } from './components/layout/body/body.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/layout/home/home.component';
import { PlaylistAddComponent } from './components/playlist/playlist-add/playlist-add.component';
import { PlaylistBlockComponent } from './components/playlist/playlist-block/playlist-block.component';
import { PlaylistViewsComponent } from './components/playlist/playlist-views/playlist-views.component';
import { PlaylistLikeComponent } from './components/playlist/playlist-like/playlist-like.component';
import { PlaylistCellComponent } from './components/playlist/playlist-cell/playlist-cell.component';
import { SongBlockComponent } from './components/song/song-block/song-block.component';
import { SongViewsComponent } from './components/song/song-views/song-views.component';
import { SongLikeComponent } from './components/song/song-like/song-like.component';
import { SingerAddComponent } from './components/singer/singer-add/singer-add.component';
import { SingerInformationComponent } from './components/singer/singer-information/singer-information.component';
import { UserChangepassComponent } from './components/user/user-changepass/user-changepass.component';
import { ForgetPassComponent } from './components/feature/forget-pass/forget-pass.component';
import { MyContributionComponent } from './components/layout/my-contribution/my-contribution.component';
import { SongCellComponent } from './components/song/song-cell/song-cell.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { LoginComponent } from './components/feature/login/login.component';
// import { SongAddComponent } from './components/song/song-add/song-add.component';
// import { SongEditComponent } from './components/song/song-edit/song-edit.component';

import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from "angular-6-social-login";
import { SongCellIPComponent } from './components/song/song-cell-i-p/song-cell-i-p.component';
import { PlaylistAddSongComponent } from './components/playlist/playlist-add-song/playlist-add-song.component';
import { SongFilterPipe } from './model/song/songFilterPipe';

//Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("359579788280313")
      }
    ]
  );
  return config;
}

import { PlaylistEditComponent } from './components/playlist/playlist-edit/playlist-edit.component';
import { SingerListComponent } from './components/singer/singer-list/singer-list.component';

import { SongEditComponent } from './components/song/song-edit/song-edit.component';
// import { PlaylistInfoComponent } from './components/playlist/playlist-info/playlist-info.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInformationComponent,
    UserUpdateComponent,
    SongUploadComponent,
    UserRegisterComponent,
    SongUploadComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    HomeComponent,
    PlaylistAddComponent,
    PlaylistBlockComponent,
    PlaylistViewsComponent,
    PlaylistLikeComponent,
    PlaylistCellComponent,
    SongBlockComponent,
    SongViewsComponent,
    SongLikeComponent,
    SingerAddComponent,
    SingerInformationComponent,
    UserChangepassComponent,
    ForgetPassComponent,
    MyContributionComponent,
    SongCellComponent,
    LoginComponent,



    SongCellIPComponent,
    PlaylistAddSongComponent,
    SongFilterPipe,

    PlaylistEditComponent,

    SingerListComponent,


    SongEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
