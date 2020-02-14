import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user/user.service';
import { ApiService } from './services/api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    InitialPageComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
