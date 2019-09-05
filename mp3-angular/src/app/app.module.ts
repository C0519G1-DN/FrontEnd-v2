import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInformationComponent } from './components/user/user-information/user-information.component';
import { HttpClientModule } from '@angular/common/http';
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
    SongCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
