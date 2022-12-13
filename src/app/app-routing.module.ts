import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternListComponent } from './intern-list/intern-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', component: RegistrationFormComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'intern-list', component: InternListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile-info', component: ProfileInfoComponent },
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
