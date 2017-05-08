import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AbsencesApiService } from "app/services/absences-api.service";

const Resource : string = "employees";

@Injectable()
export class EmployeesService {

  constructor(private api : AbsencesApiService) { }

  public getAll() : Observable<any[]>{
    return this.api.getAll(Resource);
  }

  public get(id : number) : Observable<any> {
    return this.api.get(Resource, id);
  }

  public getLeaveProfile(id: number) : Observable<any>{
    return this.api.get(Resource + '/' + id + '/leave-profile');
  }
}
