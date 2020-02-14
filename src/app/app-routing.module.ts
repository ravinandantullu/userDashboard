import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  // { path: 'delete', component: AddUserComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
