import { EMPLOYEES } from './model/mock-employee';
import { Employee } from './model/employee';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor() { }

  getEmployees(): Observable <Employee[]> {
    return of (EMPLOYEES);
  }
}
