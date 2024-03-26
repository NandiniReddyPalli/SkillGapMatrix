import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://13.48.82.196:8081';
  constructor(private http: HttpClient) {}

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/employee/fetch`); //=============
   }

  saveEmployee(employeeData: Employee): Observable<Employee> {
    console.log(employeeData+"service method");
    return this.http.post<Employee>(`${this.apiUrl}/employee/save`, employeeData);
  }

}
