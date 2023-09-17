import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddprofileComponent } from './mycomponents/addprofile/addprofile.component';

import { ProfileComponent } from './mycomponents/profile/profile.component';
import { ViewprofileComponent } from './mycomponents/viewprofile/viewprofile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'add', component: AddprofileComponent },
  { path: 'view', component:ViewprofileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
