import { EMPLOYEES } from './../model/mock-employee';
import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees: Employee[] = EMPLOYEES;

}
