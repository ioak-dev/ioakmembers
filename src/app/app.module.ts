import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { InternListComponent } from './member-list/member-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonthpickerComponent } from './monthpicker/monthpicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
// MATERIAL MODULE IMPORTS
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MembersComponent } from './member-list/members/members.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { HeadersInterceptor } from './headers.interceptor';
import { RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ResourcesComponent } from './resources/resources.component';
import { TutorialsComponent } from './resources/tutorials/tutorials.component';
import { BookmarksComponent } from './resources/bookmarks/bookmarks.component';
import { ArticlesComponent } from './articles/articles.component';
import { CreateEditArticleComponent } from './articles/create-edit-article/create-edit-article.component';
import { QuillModule } from 'ngx-quill';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    InternListComponent,
    DashboardComponent,
    MembersComponent,
    ProfileInfoComponent,
    LoginFormComponent,
    NavigationBarComponent,
    FooterComponent,
    MemberEditComponent,
    UnauthorizedComponent,
    MonthpickerComponent,
    ChangePasswordComponent,
    AdminPageComponent,
    ResourcesComponent,
    TutorialsComponent,
    BookmarksComponent,
    ArticlesComponent,
    CreateEditArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatChipsModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    QuillModule.forRoot(),
    RouterModule.forRoot([
      { path: "member-list", component: InternListComponent }
    ], { useHash: true })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
}],
  bootstrap: [AppComponent],
})
export class AppModule {}
