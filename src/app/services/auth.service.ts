import { Injectable } from '@angular/core';

import { IEmployee } from "app/models/employee.interface";

@Injectable()
export class AuthService {
  userName: string = null;
  isLoggedIn: boolean = false;

  constructor() { }

  public currentUser: IEmployee;

  public loginUser(user: IEmployee) {
    console.log(user);
    this.currentUser = user;
    this.isLoggedIn = true;
    this.userName = user.firstName;
  }

  public logout() {
    this.currentUser = null;
    this.isLoggedIn = false;
    this.userName = null;
  }

  public isAuthenticated() {
    return !(!this.currentUser);
  }
}
