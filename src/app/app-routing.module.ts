import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { InternListComponent } from './member-list/member-list.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: '', component: InternListComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'member-list', component: InternListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'member', component: ProfileInfoComponent },
  { path: 'member/:id', component: ProfileInfoComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'member/:id/edit', component: MemberEditComponent, canActivate: [AuthGuard]  },
  // /login?redirect=/member/memberid/edit
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
