import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInformationComponent } from './components/user/user-information/user-information.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';

import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { SongUploadComponent } from './components/song/song-upload/song-upload.component';
import { HomeComponent } from './components/layout/home/home.component';


const routes: Routes = [
  {
    path: 'register',
    component: UserRegisterComponent,
  },
  {
    path: 'upsong',
    component: SongUploadComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'update',
    component: UserUpdateComponent,
  },
  {
    path: 'myprofile',
    component: UserInformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
