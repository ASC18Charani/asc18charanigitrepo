import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from '../../model/data.model';
import { AuthorService } from '../../service/author.service';

@Component({
  selector: 'app-add-authors',
  // standalone: true,
  // imports: [],
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent {
  authorForm: FormGroup; 
  stars = [1, 2, 3, 4, 5]; // For star rating display
  selectedRating = 0; 

  constructor(private fb: FormBuilder, private authorService: AuthorService, private router: Router) {
    this.authorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], 
      course: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      rating: ['', [Validators.required]]  
    });
  }

  setRating(rating: number): void {
    this.selectedRating = rating;
    this.authorForm.patchValue({ rating });
  }

  hoverRating(rating: number): void {
    this.selectedRating = rating || this.authorForm.value.rating;
  }

  addAuthor(): void {
    if (this.authorForm.valid) {
      const newAuthor: Author = {
        name: this.authorForm.value.name.trim(),
        course: this.authorForm.value.course.trim(),
        description: this.authorForm.value.description.trim(),
        rating: this.selectedRating
      };

     
      this.authorService.createAuthor(newAuthor).subscribe({
        next: (createdAuthor) => {
          console.log('Author created:', createdAuthor);
          this.router.navigate(['/authors']);
          this.resetForm();  // Clear the form after submission
        },
        error: (err) => {
          console.error('Error creating author:', err);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(): void {
    this.authorForm.reset();
    this.selectedRating = 0;
  }
}
