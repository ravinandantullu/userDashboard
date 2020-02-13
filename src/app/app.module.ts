import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitialPageComponent } from './src/app/initial-page/initial-page.component';
import { UserDetailsComponent } from './src/app/user-details/user-details.component';
import { AddUserComponent } from './src/app/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    UserDetailsComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
