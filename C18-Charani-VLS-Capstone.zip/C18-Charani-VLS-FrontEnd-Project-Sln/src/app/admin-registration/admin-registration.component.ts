import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../model/data.model';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-registration',
  // standalone: true,
  // imports: [],
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent {
  registrationForm: FormGroup;
  emailInUse: boolean = false;
  phoneInUse: boolean = false;
  formErrorMessage: string = '';
  private baseUrl = 'http://localhost:3000/registrations'; // Adjust to your backend URL

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,private registrationService: RegistrationService) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]
      ]
    });
  }

onRegister(){
  if (this.registrationForm.valid) {
    const newRegistration: Registration = {
      name: this.registrationForm.value.name.trim(),
      email: this.registrationForm.value.email.trim(),
      phone: this.registrationForm.value.phone.trim(),
      password: this.registrationForm.value.password.trim()
    };
    let existingRegistration = {
      name: '',
      email: '',
      phone: '',
      password: ''
    };
    console.log(newRegistration);
    this.registrationService.checkEmailInUse(newRegistration.email).subscribe({
      next: (registation) => {
        console.log('Email check response:', registation); // Debugging response
        // this.emailInUse = emailInUse;
        existingRegistration = registation;
        console.log("EXISTING REG : ", existingRegistration)
        if (existingRegistration.email === null) {
          console.log("LETS go and create!")
          // Proceed with registration creation if email is not in use
          this.registrationService.createRegistration(newRegistration).subscribe({
            next: (createdRegistration) => {
              console.log('Registration created:', createdRegistration);
              
              this.router.navigate(['/login']);
            },
            error: (err) => {
              console.error('Error creating registration:', err);
              this.formErrorMessage = 'Failed to create registration. Please try again later.';
            }
          });
        }
      },
      error: (err) => {
        console.error('Error checking email:', err);
        this.formErrorMessage = 'Error validating email. Please try again.';
      }
    });
    
  }
}
 }
