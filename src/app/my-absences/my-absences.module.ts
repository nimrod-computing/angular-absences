import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { LeaveProfileComponent } from "app/my-absences/leave-profile/leave-profile.component";
import { AbsenceListComponent } from "app/my-absences/absence-list/absence-list.component";
import { RequestLeaveComponent } from "app/my-absences/request-leave/request-leave.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LeaveProfileComponent,
    AbsenceListComponent,
    RequestLeaveComponent
  ]
})
export class MyAbsencesModule { }
