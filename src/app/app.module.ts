import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';

import { UserDetailsComponent } from './user-details/user-details.component';

import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';



export function getUserList(userService: UserService) {
  return () => userService.getUserData();
}

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    
    UserDetailsComponent,
    DashboardComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    { provide: APP_INITIALIZER, useFactory: getUserList, deps: [UserService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
