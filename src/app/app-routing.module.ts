import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { InitialPageComponent } from './initial-page/initial-page.component';

const routes: Routes = [
<<<<<<< HEAD

  { path: 'add-user', component: AddUserComponent }

=======
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: InitialPageComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: '**', component: InitialPageComponent }
>>>>>>> 7b2b491839b3201dfbfb5082ee3fe95342ec0fd5
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
