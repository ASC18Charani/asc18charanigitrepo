// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Registration } from '../../model/data.model';
// import { RegistrationService } from '../../service/registration.service';

// @Component({
//   selector: 'app-update-registration',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './update-registration.component.html',
//   styleUrls: ['./update-registration.component.css']
// })
// export class UpdateRegistrationComponent {
//   registrationForm: FormGroup;
//   registrationId?: string; 
//   emailInUse: boolean = false; // To track if email is already in use
//   phoneInUse: boolean = false; // To track if phone is already in use
//   formErrorMessage: string = '';
//   registration: Registration | undefined;

//   constructor(
//     private fb: FormBuilder, 
//     private registrationService: RegistrationService, 
//     private router: Router, 
//     private activatedRoute: ActivatedRoute
//   ) {
//     // Initialize the form group with form controls
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


//   ngOnInit(): void {
//     this.registrationId = this.activatedRoute.snapshot.params['id']; // Retrieve the course ID from URL
//     console.log('Registration ID:', this.registrationId);  // Check if the ID is being fetched correctly
//     this.loadRegistration(); // Fetch the course data
//   }
  

//   loadRegistration(): void {
//     if (this.registrationId) { // Ensure that courseId is defined
//       this.registrationService.getRegistrationById(this.registrationId).subscribe({
//         next: (data) => {
//           this.registration = data;
//           console.log('Loaded registration:', this.registration);  // Check if the course data is loaded properly
//           this.registrationForm.setValue({
//             name: this.registration.name,
//             email: this.registration.email,
//             phone: this.registration.phone,
//             password: ''
//           });
//         },
//         error: (err) => {
//           console.error('Error fetching registration:', err);
//         }
//       });
//     } else {
//       console.error('Registration ID is invalid');
//     }
//   }

//   updateRegistration(): void {
//     if (this.registrationForm.valid && this.registrationId) { // Ensure courseId exists
//       const updatedRegistration: Registration = {
//         id: this.registrationId, // Pass the existing ID
//         name: this.registrationForm.value.name.trim(),
//         email: this.registrationForm.value.email.trim(),
//         phone: this.registrationForm.value.phone.trim(),
//         password: this.registrationForm.value.password.trim()
//       };

//       this.registrationService.checkEmailInUse(updatedRegistration.email).subscribe({
//         next: (emailInUse) => {
//           this.emailInUse = emailInUse;
//           if (!emailInUse) {
//             this.registrationService.checkPhoneInUse(updatedRegistration.phone).subscribe({
//               next: (phoneInUse) => {
//                 this.phoneInUse = phoneInUse;
//                 if (!phoneInUse) {
//                   // Create new registration
//                   this.registrationService.updateRegistration(updatedRegistration).subscribe({
//                     next: (updatedRegistration) => {
//                       console.log('Registration updated:', updatedRegistration);
//                       this.resetForm();
//                       this.router.navigate(['/registrations']); // Redirect to login page after successful registration
//                     },
//                     error: (err) => {
//                       console.error('Error updating registration:', err);
//                       this.formErrorMessage = 'Failed to update registration. Please try again later.';
//                     }
//                   });
//                 }
//               },
//               error: (err) => {
//                 console.error('Error checking phone in use:', err);
//                 this.formErrorMessage = 'Error validating phone number. Please try again later.';
//               }
//             });
//           }
//         },
//         error: (err) => {
//           console.error('Error checking email in use:', err);
//           this.formErrorMessage = 'Error validating email. Please try again later.';
//         }
//       });
//     } else {
//       this.formErrorMessage = 'Please correct the errors in the form before submitting.';
//     }
//   }
  
      
//   //     this.learnerService.updateLearner(this.learnerId, updatedLearner).subscribe({
//   //       next: () => {
//   //         console.log('Learner updated successfully');
//   //         this.router.navigate(['/learners']); 
//   //       },
//   //       error: (err) => {
//   //         console.error('Error updating learner:', err);
//   //       }
//   //     });
//   //   } else {
//   //     console.error('Invalid learner details or learner ID');
//   //   }
//   // }
  
//   resetForm(): void {
//     this.registrationForm.reset();
//     if (this.registration) {
//       this.registrationForm.setValue({
//         name: this.registration.name,
//         email: this.registration.email,
//         phone: this.registration.phone,
//         password: this.registration.password
//       });
//     }
//   }
// }


import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Registration } from '../../model/data.model';
import { RegistrationService } from '../../service/registration.service';
import { AdminServices } from '../../service/adminService';

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.css']
})
export class UpdateRegistrationComponent {
  registrationForm: FormGroup;
  registrationId?: string;
  emailInUse: boolean = false;
  phoneInUse: boolean = false;
  formErrorMessage: string = '';
  registration: Registration | undefined;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adminService:AdminServices
  ) {
    this.registrationForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]
      ],
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          )
        ]
      ]
    });
  }

  ngOnInit(): void {
    this.registrationId = this.activatedRoute.snapshot.params['id'];
    this.loadRegistration();
  }

  loadRegistration(): void {
    if (this.registrationId) {
      this.registrationService.getRegistrationById(this.registrationId).subscribe({
        next: (data) => {
          //this.registration = data;
          this.registrationForm.patchValue({
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: ''
          });
        },
        error: (err) => {
          console.error('Error fetching registration:', err);
        }
      });
    } else {
      console.error('Invalid registration ID');
    }
  }

  updateRegistration(): void {
    if (this.registrationForm.valid && this.registrationId) {
      const updatedRegistration: Registration = {
        id: this.registrationId,
        name: this.registrationForm.value.name.trim(),
        email: this.registrationForm.value.email.trim(),
        phone: this.registrationForm.value.phone.trim(),
        password: this.registrationForm.value.password.trim()
      };

      this.registrationService.updateRegistration(this.registrationId, updatedRegistration).subscribe({
        next: (updatedRegistration) => {
          console.log('Registration updated successfully:', updatedRegistration);
          this.router.navigate(['/registrations']);
        },
        error: (err) => {
          console.error('Error updating registration:', err);
          this.formErrorMessage = 'Failed to update registration. Please try again.';
        }
      });
    } else {
      this.formErrorMessage = 'Please correct the errors in the form.';
    }
  }

  resetForm(): void {
    this.registrationForm.reset();
    if (this.registration) {
      this.registrationForm.setValue({
        name: this.registration.name,
        email: this.registration.email,
        phone: this.registration.phone,
        password: ''
      });
    }
  }
}
