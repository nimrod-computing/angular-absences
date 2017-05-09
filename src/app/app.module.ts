import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MyAbsencesModule } from "app/my-absences/my-absences.module";

import { AppComponent } from "app/app.component";
import { LoginComponent } from "app/common/login/login.component";
import { PageNotFoundComponent } from "app/common/page-not-found/page-not-found.component";
import { NavbarComponent } from "app/common/navbar/navbar.component";

import { AuthService } from "app/services/auth.service";
import { AbsencesApiService } from 'app/services/absences-api.service';
import { EmployeesService } from 'app/services/employees.service';
import { LeaveProfilesService } from "app/services/leave-profiles.service";
import { ErrorHandlerService } from "app/services/error-handler.service";
import { AbsencesService } from "app/services/absences.service";
import { LeaveProfileComponent } from "app/my-absences/leave-profile/leave-profile.component";

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
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

    // application modules
    MyAbsencesModule
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
