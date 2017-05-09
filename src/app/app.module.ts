import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RequestLeaveComponent } from 'app/components/request-leave/request-leave.component';
import { AbsencesService } from "app/services/absences.service";
import { AbsenceListComponent } from "app/components/absence-list/absence-list.component";
import { LeaveProfileComponent } from "app/components/leave-profile/leave-profile.component";
import { PageNotFoundComponent } from "app/components/page-not-found/page-not-found.component";
import { NavbarComponent } from "app/components/navbar/navbar.component";

import { AuthService } from "app/services/auth.service";
import { AbsencesApiService } from './services/absences-api.service';
import { EmployeesService } from './services/employees.service';
import { LeaveProfilesService } from "app/services/leave-profiles.service";
import { ErrorHandlerService } from "app/services/error-handler.service";

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
    AuthService,
    ErrorHandlerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
