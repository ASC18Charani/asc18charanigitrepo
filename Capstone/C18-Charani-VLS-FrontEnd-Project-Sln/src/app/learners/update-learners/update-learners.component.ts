import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Learner } from '../../model/data.model';
import { LearnerService } from '../../service/learner.service';

@Component({
  selector: 'app-update-learners',
  // standalone: true,
  // imports: [],
  templateUrl: './update-learners.component.html',
  styleUrls: ['./update-learners.component.css']
})
export class UpdateLearnersComponent implements OnInit{
  learnerForm: FormGroup;
  learnerId?: string; // To hold the course ID
  learner: Learner | undefined;

  constructor(
    private fb: FormBuilder, 
    private learnerService: LearnerService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {
    // Initialize the form group with form controls
    this.learnerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // Name is required, at least 3 characters
      course: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      trainer: ['', [Validators.required]],
      paymentmethod: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.learnerId = this.activatedRoute.snapshot.params['id']; // Retrieve the course ID from URL
    console.log('Learner ID:', this.learnerId);  // Check if the ID is being fetched correctly
    this.loadLearner(); // Fetch the course data
  }
  

  loadLearner(): void {
    if (this.learnerId) { // Ensure that courseId is defined
      this.learnerService.getLearnerById(this.learnerId).subscribe({
        next: (data) => {
          this.learner = data;
          console.log('Loaded learner:', this.learner);  // Check if the course data is loaded properly
          this.learnerForm.setValue({
            name: this.learner.name,
            email: this.learner.email,
            course: this.learner.course,
            trainer: this.learner.trainer,
            paymentmethod: this.learner.paymentmethod
          });
        },
        error: (err) => {
          console.error('Error fetching learner:', err);
        }
      });
    } else {
      console.error('Learner ID is invalid');
    }
  }

  updateLearner(): void {
    if (this.learnerForm.valid && this.learnerId) { // Ensure courseId exists
      const updatedLearner: Learner = {
        id: this.learnerId, // Pass the existing ID
        name: this.learnerForm.value.name.trim(),
        email: this.learnerForm.value.email.trim(),
        course: this.learnerForm.value.course.trim(),
        trainer: this.learnerForm.value.trainer.trim(),
        paymentmethod: this.learnerForm.value.paymentmethod.trim(),
      };
  
      
      this.learnerService.updateLearner(this.learnerId, updatedLearner).subscribe({
        next: () => {
          console.log('Learner updated successfully');
          this.router.navigate(['/learners']); 
        },
        error: (err) => {
          console.error('Error updating learner:', err);
        }
      });
    } else {
      console.error('Invalid learner details or learner ID');
    }
  }
  
  resetForm(): void {
    this.learnerForm.reset();
    if (this.learner) {
      this.learnerForm.setValue({
        name: this.learner.name,
        email: this.learner.email,
        course: this.learner.course,
        trainer: this.learner.trainer,
        paymentmethod: this.learner.paymentmethod
      });
    }
  }
}
