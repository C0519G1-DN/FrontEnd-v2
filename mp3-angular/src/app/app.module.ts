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
import { UserLoginComponent } from './components/login/user-login/user-login.component';

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
    UserLoginComponent
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
