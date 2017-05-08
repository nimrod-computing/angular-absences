import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { IAbsence } from "app/models/absence.interface";
import { LeaveProfilesService } from "app/services/leave-profiles.service";

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css']
})
export class AbsenceListComponent {

  errorMessage: string;
  @Input() refresh: number;    // the parent changes the value to refresh the component
  @Input() profileid: number = 0;
  @Input() absences: IAbsence[];

  constructor(private leaveProfilesService: LeaveProfilesService) { }

  showAlert(message: string) : boolean {
    alert(message);
    return false;
  }
}
