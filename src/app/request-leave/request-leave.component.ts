import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { IAbsence } from "app/models/absence.interface";
import { IEmployee } from "app/models/employee.interface";
import { ILeaveProfile } from "app/models/leave-profile.interface";
import { AbsencesService } from "app/services/absences.service";

@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class RequestLeaveComponent implements OnInit {
  @Input() leaveProfile: ILeaveProfile;
  @Input() user: IEmployee;
  @Output() posted = new EventEmitter();

  errorMessage: string = "";
  absence: IAbsence = <IAbsence>{};

  constructor(
    private absencesService: AbsencesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancelRequest(){
    console.log('Request cancelled');
    this.posted.emit('cancelled');
  }

  requestLeave() {
    console.log(this.absence);
    this.absence.leaveProfileId = this.leaveProfile.id;

    this.absencesService.create(this.absence)
      .subscribe(
      data => {
        console.log(data);
        this.absence = <IAbsence>{};
        this.posted.emit("posted");
        this.errorMessage = "";
      },
      err => {
        console.log(err);
        this.errorMessage = err;
      });
  }

}
