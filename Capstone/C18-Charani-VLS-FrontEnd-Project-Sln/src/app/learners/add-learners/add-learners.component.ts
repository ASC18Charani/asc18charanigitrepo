import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Learner } from '../../model/data.model';
import { LearnerService } from '../../service/learner.service';

@Component({
  selector: 'app-add-learners',
  // standalone: true,
  // imports: [],
  templateUrl: './add-learners.component.html',
  styleUrls: ['./add-learners.component.css']
})
export class AddLearnersComponent {
  learnerForm: FormGroup;  // Define the form group

  constructor(private fb: FormBuilder, private learnerService: LearnerService, private router: Router) {
   
    this.learnerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], 
      email: ['', [Validators.required, Validators.email]],
      course: ['', [Validators.required]],
      trainer: ['', [Validators.required]],
      paymentmethod: ['', [Validators.required]]
    });
  }


  addLearner(): void {
    if (this.learnerForm.valid) {
      const newLearner: Learner = {
        name: this.learnerForm.value.name.trim(),
        email: this.learnerForm.value.email.trim(),
        course: this.learnerForm.value.course.trim(),
        trainer: this.learnerForm.value.trainer.trim(),
        paymentmethod: this.learnerForm.value.paymentmethod.trim(),
      };

      
      this.learnerService.createLearners(newLearner).subscribe({
        next: (createdLearner) => {
          console.log('Learner created:', createdLearner);
          this.router.navigate(['/learners']);
          this.resetForm();  // Clear the form after submission
        },
        error: (err) => {
          console.error('Error creating learner:', err);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  // addLearner(): void {
  //   if (this.learnerForm.valid) {
  //     const newLearner: Learner = {
  //       name: this.learnerForm.value.name.trim(),
  //       email: this.learnerForm.value.email.trim(),
  //       course: this.learnerForm.value.course.trim(),
  //       trainer: this.learnerForm.value.trainer.trim(),
  //       paymentmethod: this.learnerForm.value.paymentmethod.trim(),
  //     };
  
  //     console.log('Submitting learner:', newLearner);  // Check the learner data before sending
  
  //     this.learnerService.createLearners(newLearner).subscribe({
  //       next: (createdLearner) => {
  //         console.log('Learner created:', createdLearner);
  //         this.router.navigate(['/learners']);
  //         this.resetForm();  // Clear the form after submission
  //       },
  //       error: (err) => {
  //         console.error('Error creating learner:', err);
  //       }
  //     });
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  // addLearner(): void {
  //   if (this.learnerForm.valid) {
  //     const newLearner: Learner = {
  //       name: this.learnerForm.value.name.trim(),
  //       email: this.learnerForm.value.email.trim(),
  //       course: this.learnerForm.value.course.trim(),
  //       trainer: this.learnerForm.value.trainer.trim(),
  //       paymentmethod: this.learnerForm.value.paymentmethod.trim(),
  //     };
  
  //     console.log('Learner data:', newLearner);  // Log to check the learner data before sending
  
  //     this.learnerService.createLearners(newLearner).subscribe({
  //       next: (createdLearner) => {
  //         console.log('Learner created:', createdLearner);
  //         this.router.navigate(['/learners']);
  //         this.resetForm();  // Clear the form after submission
  //       },
  //       error: (err) => {
  //         console.error('Error creating learner:', err);
  //       }
  //     });
  //   } else {
  //     console.error('Form is invalid');
  //     // Optionally, you can log out form errors for better debugging
  //     console.log(this.learnerForm.errors);
  //   }
  // }
  
  


  resetForm(): void {
    this.learnerForm.reset();
  }
}

