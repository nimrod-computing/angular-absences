import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { EmployeesService } from "app/services/employees.service";
import { AuthService } from "app/services/auth.service";

import { IEmployee } from "app/models/employee.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private errorMessage: string;

  public employees: any[];

  constructor(
    private employeesService: EmployeesService,
    private authService: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    this.employeesService.getAll()
      .subscribe(
      data => {
        console.log(data);
        this.employees = data
      },
      err => {
        console.log(err);
        this.errorMessage = err;
      });
    console.log(this.employees);
  }

  public login(values: any) {
    console.log(values);
    let user: IEmployee;
    this.employeesService.get(values.userId)
      .subscribe(
        data => {
          this.authService.loginUser(data);
          this.router.navigate(['/leave-profile']);
        },
        err => this.errorMessage = err
      );

  }

}
