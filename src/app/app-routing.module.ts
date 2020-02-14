import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'initialpage', pathMatch: 'full' },
  { path: 'initialpage', component: InitialPageComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'user-details/:name', component: UserDetailsComponent },
  // { path: 'delete', component: AddUserComponent },
  { path: '**', component: InitialPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
