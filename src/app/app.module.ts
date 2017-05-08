import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from "app/services/auth.service";
import { AbsencesApiService } from './services/absences-api.service';
import { EmployeesService } from './services/employees.service';
import { LeaveProfilesService } from "app/services/leave-profiles.service";
import { LeaveProfileComponent } from "app/leave-profile/leave-profile.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { AbsenceListComponent } from "app/absence-list/absence-list.component";
import { RequestLeaveComponent } from './request-leave/request-leave.component';
import { AbsencesService } from "app/services/absences.service";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "leave-profile", component: LeaveProfileComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LeaveProfileComponent,
    PageNotFoundComponent,
    AbsenceListComponent,
    RequestLeaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AbsencesApiService,
    EmployeesService,
    LeaveProfilesService,
    AbsencesService,
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
