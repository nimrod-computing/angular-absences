import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { IAbsence } from "app/models/absence.interface";
import { AbsencesApiService } from "app/services/absences-api.service";

const Resource : string = "absences";

@Injectable()
export class AbsencesService {

  constructor(private api : AbsencesApiService) { }

  public create(entity : IAbsence) : Observable<any> {
      return this.api.post(Resource, entity);
  }

}
