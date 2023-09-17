import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './mycomponents/profile/profile.component';
import { ViewprofileComponent } from './mycomponents/viewprofile/viewprofile.component';
import { AddprofileComponent } from './mycomponents/addprofile/addprofile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ViewprofileComponent,
    AddprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
