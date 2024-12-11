// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Registration } from '../../model/data.model';
// import { RegistrationService } from '../../service/registration.service';

// @Component({
//   selector: 'app-add-registration',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './add-registration.component.html',
//   styleUrls: ['./add-registration.component.css']
// })
// export class AddRegistrationComponent {
//   registrationForm: FormGroup;  // Define the form group

//   constructor(private fb: FormBuilder, private registrationService: RegistrationService, private router: Router) {

//     this.registrationForm = this.fb.group({
//       name: [
//         '',
//         [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')] // No numbers or special characters
//       ],
//       email: [
//         '',
//         [Validators.required, Validators.email] // Validate as email
//       ],
//       phone: [
//         '',
//         [Validators.required, Validators.pattern('^[0-9]{10}$')] // Exactly 10 digits
//       ],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern(
//             '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$' // Minimum eight characters, one uppercase, one lowercase, one digit, one special character
//           )
//         ]
//       ]
//     });
//   }


//   addRegistration(): void {
//     if (this.registrationForm.valid) {
//       const newRegistration: Registration = {
//         name: this.registrationForm.value.name.trim(),
//         email: this.registrationForm.value.email.trim(),
//         phone: this.registrationForm.value.phone.trim(),
//         password: this.registrationForm.value.password.trim(),
//       };


//       this.registrationService.createRegistration(newRegistration).subscribe({
//         next: (createdRegistration) => {
//           console.log('Registration created:', createdRegistration);
//           this.router.navigate(['/registrations']);
//           this.resetForm();  // Clear the form after submission
//         },
//         error: (err) => {
//           console.error('Error creating registration:', err);
//         }
//       });
//     } else {
//       console.log('Form is invalid');
//     }
//   }


//   resetForm(): void {
//     this.registrationForm.reset();
//   }
// }



import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../../model/data.model';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']
})
export class AddRegistrationComponent {
  registrationForm: FormGroup;
  emailInUse: boolean = false; // To track if email is already in use
  phoneInUse: boolean = false; // To track if phone is already in use
  formErrorMessage: string = ''; // General form error message

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {
    // Initialize the form group
    this.registrationForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')] // No numbers or special characters
      ],
      email: [
        '',
        [Validators.required, Validators.email] // Validate as email
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')] // Exactly 10 digits
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$' // Minimum eight characters, one uppercase, one lowercase, one digit, one special character
          )
        ]
      ]
    });
  }

  // Add new registration
  addRegistration(): void {
    console.log('addRegistration')
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
                this.resetForm();
                this.router.navigate(['/registrations']);
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



  // Reset form
  resetForm(): void {
    this.registrationForm.reset();
    this.emailInUse = false;
    this.phoneInUse = false;
    this.formErrorMessage = '';
  }
}