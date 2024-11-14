import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee-service';

@Component({
  selector: 'app-add-emp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent {
  addForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private employeeService: EmployeeService) {
    this.addForm = this.formBuilder.group ({
      id: [],
      name: [],
      salary: []
    });
  }

  saveEmployee() {
  }

}
