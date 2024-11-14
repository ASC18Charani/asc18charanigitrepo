import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";
@Injectable ({
    providedIn: 'root',
})
export class EmployeeService {
    baseUrl : string = "http://localhost:3000/employee";
    constructor(private http : HttpClient) {

    }

    getEmployee () {
        return this.http.get<Employee[]>(this.baseUrl)
    }
}
