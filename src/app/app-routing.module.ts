import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { InternListComponent } from './member-list/member-list.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', component: RegistrationFormComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'member-list', component: InternListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile-info', component: ProfileInfoComponent },
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
