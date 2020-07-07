import { EmployeeService } from './../employee.service';
import { EMPLOYEES } from './../model/mock-employee';
import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  employees: Employee[];

  getEmployees():void {
    this.employeeService.getEmployees()
        .subscribe(employees => this.employees = employees);
  }

}
