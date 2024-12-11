import { Component } from '@angular/core';
import { Review } from '../../model/data.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from '../../service/review.service';

@Component({
  selector: 'app-add-reviews',
  // standalone: true,
  // imports: [],
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent {
  reviewForm: FormGroup; 
  stars = [1, 2, 3, 4, 5]; // For star rating display
  selectedRating = 0; 

  constructor(private fb: FormBuilder, private reviewService: ReviewService, private router: Router) {
   
    this.reviewForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      course: ['', [Validators.required]],
      review: ['', [Validators.required, Validators.minLength(3)]],
      rating: ['', [Validators.required]]   
    });
  }

  setRating(rating: number): void {
    this.selectedRating = rating;
    this.reviewForm.patchValue({ rating });
  }

  hoverRating(rating: number): void {
    this.selectedRating = rating || this.reviewForm.value.rating;
  }



  addReview(): void {
    if (this.reviewForm.valid) {
      const newReview: Review = {
        name: this.reviewForm.value.name.trim(),
        course: this.reviewForm.value.course.trim(),
        review: this.reviewForm.value.review.trim(),
        rating: this.selectedRating 
      };

      
      this.reviewService.createReview(newReview).subscribe({
        next: (createdReview) => {
          console.log('Review created:', createdReview);
          this.router.navigate(['/reviews']);
          this.resetForm();  // Clear the form after submission
        },
        error: (err) => {
          console.error('Error creating review:', err);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }


  resetForm(): void {
    this.reviewForm.reset();
    this.selectedRating = 0;
  }
}
