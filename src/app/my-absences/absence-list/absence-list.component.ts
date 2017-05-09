import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

import { IAbsence } from "app/models/absence.interface";

import { AbsencesService } from "app/services/absences.service";

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css']
})
export class AbsenceListComponent {
  errorMessage: string = '';

  @Input() refresh: number;    // the parent changes the value to refresh the component
  @Input() profileid: number = 0;
  @Input() absences: IAbsence[];
  @Output() deleted = new EventEmitter();

  constructor(
    private absencesService: AbsencesService
  ) { }

  showAlert(message: string): boolean {
    alert(message);
    return false;
  }

  public removeAbsence(id: number): boolean {
    this.absencesService.remove(id)
      .subscribe(
      data => {
        console.log(data);
        this.errorMessage = "";
        this.deleted.emit('deleted');
      },
      err => {
        console.log(err);
        this.errorMessage = 'Error removing Absence - contact IT Support';
        this.deleted.emit('cancelled');
     });
    return false;
  }
}
