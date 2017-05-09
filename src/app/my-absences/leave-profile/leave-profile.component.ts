import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { AuthService } from "app/services/auth.service";
import { EmployeesService } from "app/services/employees.service";
import { LeaveProfilesService } from "app/services/leave-profiles.service";

import { IEmployee } from "app/models/employee.interface";
import { ILeaveProfile } from "app/models/leave-profile.interface";
import { IAbsence } from "app/models/absence.interface";

@Component({
  selector: 'app-leave-profile',
  templateUrl: './leave-profile.component.html',
  styleUrls: ['./leave-profile.component.css']
})
export class LeaveProfileComponent implements OnInit {
  errorMessage: string = "";
  user: IEmployee = <IEmployee>{};
  leaveProfile: ILeaveProfile = <ILeaveProfile>{};
  absences: IAbsence[];

  showLeaveRequest: boolean = false;

  constructor(
    private auth: AuthService,
    private employeesService: EmployeesService,
    private leaveProfilesService: LeaveProfilesService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    console.log("refresh");
    this.getLeaveProfile();
    this.showLeaveRequest = false;
  }

  getLeaveProfile() {
    this.user = this.auth.currentUser;
    this.employeesService.getLeaveProfile(this.user.id)
      .subscribe(
      data => {
        console.log(data);
        this.leaveProfile = data;
        this.errorMessage = "";
        this.getAbsences();
      },
      err => {
        console.log(err);
        this.errorMessage = err;
      });
  }


  private getAbsences(): void {
    this.leaveProfilesService.getAbsences(this.leaveProfile.id)
      .subscribe(
      data => {
        console.log(data);
        this.absences = data
        this.errorMessage = "";
      },
      err => {
        console.log(err);
        this.errorMessage = err;
      });
    console.log(this.absences);
  }


  public isLeaveAllowed(): boolean {
    return this.leaveProfile.daysRemaining > 0;
  }

  public requestLeave(): void {
    console.log('Request leave for ' + this.leaveProfile.id);
    this.showLeaveRequest = true;
  }
}
