import { Component, model, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Employee} from './model/employee.model';
import { EmployeeService } from './service/employee-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template : ` <h1> hello </h1> <br> 
  // <h2>Property : {{title}}`,
  // styles : `h1 {font-weight: bold; color:red}`,
})
export class AppComponent implements OnInit{
  title = 'angularProject';
  employees? : Employee[];

  constructor(private employeeService : EmployeeService) {
  }
  ngOnInit(): void{
    console.log("asynchronous retriving the data from the server");
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }
}