import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { InitialPageComponent } from './initial-page/initial-page.component'



const routes: Routes = [
  { path: '', component: InitialPageComponent },
  { path: 'add-user', component: AddUserComponent }

];


@NgModule({
  imports: [
    CommonModule,
  RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
