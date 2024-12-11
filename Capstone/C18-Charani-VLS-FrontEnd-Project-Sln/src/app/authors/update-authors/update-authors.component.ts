import { Component, OnInit } from '@angular/core';
import { Author } from '../../model/data.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../service/author.service';

@Component({
  selector: 'app-update-authors',
  // standalone: true,
  // imports: [],
  templateUrl: './update-authors.component.html',
  styleUrls: ['./update-authors.component.css']
})
export class UpdateAuthorsComponent implements OnInit{
  authorForm: FormGroup;
  authorId?: string; // To hold the course ID
  author: Author | undefined;
  stars = [1, 2, 3, 4, 5]; // For star rating display
  selectedRating = 0;

  constructor(
    private fb: FormBuilder, 
    private authorService: AuthorService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {
    // Initialize the form group with form controls
    this.authorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], 
      course: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      rating: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.authorId = this.activatedRoute.snapshot.params['id']; // Retrieve the course ID from URL
    console.log('Author ID:', this.authorId);  // Check if the ID is being fetched correctly
    this.loadAuthor(); // Fetch the course data
  }
  

  loadAuthor(): void {
    if (this.authorId) { // Ensure that courseId is defined
      this.authorService.getAuthorById(this.authorId).subscribe({
        next: (data) => {
          this.author = data;
          this.selectedRating = this.author.rating;
          console.log('Loaded author:', this.author);  // Check if the course data is loaded properly
          this.authorForm.setValue({
            name: this.author.name,
            course: this.author.course,
            description: this.author.description,
            rating: this.author.rating
          });
        },
        error: (err) => {
          console.error('Error fetching author:', err);
        }
      });
    } else {
      console.error('Author ID is invalid');
    }
  }

  setRating(rating: number): void {
    this.selectedRating = rating;
    this.authorForm.patchValue({ rating });
  }

  hoverRating(rating: number): void {
    this.selectedRating = rating || this.authorForm.value.rating;
  }
  
  updateAuthor(): void {
    if (this.authorForm.valid && this.authorId) { // Ensure courseId exists
      const updatedAuthor: Author = {
        id: this.authorId, // Pass the existing ID
        name: this.authorForm.value.name.trim(),
        course: this.authorForm.value.course.trim(),
        description: this.authorForm.value.description.trim(),
        rating: this.selectedRating
      };
  
      // Pass both `id` and `updatedCourse` to the service method
      this.authorService.updateAuthor(this.authorId, updatedAuthor).subscribe({
        next: () => {
          console.log('Author updated successfully');
          this.router.navigate(['/authors']); // Navigate back to the courses list after successful update
        },
        error: (err) => {
          console.error('Error updating author:', err);
        }
      });
    } else {
      console.error('Invalid author details or author ID');
    }
  }

  resetForm(): void {
    this.authorForm.reset();
    if (this.author) {
      this.authorForm.setValue({
        name: this.author.name,
        course: this.author.course,
        description: this.author.description,
        rating: this.author.rating,
      });
      this.selectedRating = this.author.rating;
    }
  }
}