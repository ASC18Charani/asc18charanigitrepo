import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Review } from '../../model/data.model';
import { ReviewService } from '../../service/review.service';

@Component({
  selector: 'app-update-reviews',
  // standalone: true,
  // imports: [],
  templateUrl: './update-reviews.component.html',
  styleUrls: ['./update-reviews.component.css']
})
export class UpdateReviewsComponent {
  reviewForm: FormGroup;
  reviewId?: string; // To hold the course ID
  review: Review | undefined;
  stars = [1, 2, 3, 4, 5]; // For star rating display
  selectedRating = 0;

  constructor(
    private fb: FormBuilder, 
    private reviewService: ReviewService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {
    // Initialize the form group with form controls
    this.reviewForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      course: ['', [Validators.required]], // Description is required
      review: ['', [Validators.required, Validators.minLength(3)]],
      rating: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.reviewId = this.activatedRoute.snapshot.params['id']; // Retrieve the course ID from URL
    console.log('Review ID:', this.reviewId);  // Check if the ID is being fetched correctly
    this.loadReview(); // Fetch the course data
  }
  

  loadReview(): void {
    if (this.reviewId) { // Ensure that courseId is defined
      this.reviewService.getReviewById(this.reviewId).subscribe({
        next: (data) => {
          this.review = data;
          this.selectedRating = this.review.rating;
          console.log('Loaded review:', this.review);  // Check if the course data is loaded properly
          this.reviewForm.setValue({
            name: this.review.name,
            course: this.review.course,
            review: this.review.review,
            rating: this.review.rating
          });
        },
        error: (err) => {
          console.error('Error fetching review:', err);
        }
      });
    } else {
      console.error('Review ID is invalid');
    }
  }

  setRating(rating: number): void {
    this.selectedRating = rating;
    this.reviewForm.patchValue({ rating });
  }

  hoverRating(rating: number): void {
    this.selectedRating = rating || this.reviewForm.value.rating;
  }

  updateReview(): void {
    if (this.reviewForm.valid && this.reviewId) { // Ensure courseId exists
      const updatedReview: Review = {
        id: this.reviewId, // Pass the existing ID
        name: this.reviewForm.value.name.trim(),
        course: this.reviewForm.value.course.trim(),
        review: this.reviewForm.value.review.trim(),
        rating: this.selectedRating
      };
  
      
      this.reviewService.updateReview(this.reviewId, updatedReview).subscribe({
        next: () => {
          console.log('Review updated successfully');
          this.router.navigate(['/reviews']); 
        },
        error: (err) => {
          console.error('Error updating review:', err);
        }
      });
    } else {
      console.error('Invalid review details or review ID');
    }
  }
  
  resetForm(): void {
    this.reviewForm.reset();
    if (this.review) {
      this.reviewForm.setValue({
        name: this.review.name,
        course: this.review.course,
        review: this.review.review,
        rating: this.review.rating,
      });
      this.selectedRating = this.review.rating;
    }
  }
}