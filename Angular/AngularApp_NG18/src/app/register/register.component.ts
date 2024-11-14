import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      adminName: ['admin',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid) {
      return;
    }
    console.log('Form Submitted Successfully', this.registerForm.value);
  }

}
