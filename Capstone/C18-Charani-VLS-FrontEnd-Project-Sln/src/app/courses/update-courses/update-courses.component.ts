// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Course } from '../../model/data.model';
// import { CourseService } from '../../service/course.service';

// @Component({
//   selector: 'app-update-courses',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './update-courses.component.html',
//   styleUrl: './update-courses.component.css'
// })
// export class UpdateCoursesComponent implements OnInit{

//   courseForm: FormGroup;
//   courseId?: string; // To hold the course ID
//   course: Course | undefined;

//   constructor(
//     private fb: FormBuilder, 
//     private courseService: CourseService, 
//     private router: Router, 
//     private activatedRoute: ActivatedRoute
//   ) {
//     // Initialize the form group with form controls
//     this.courseForm = this.fb.group({
//       name: ['', [Validators.required, Validators.minLength(3)]], // Name is required, at least 3 characters
//       description: ['', [Validators.required]] // Description is required
//     });
//   }

//   ngOnInit(): void {
//     // Retrieve the course ID from the route parameters
//     this.courseId = this.activatedRoute.snapshot.params['id'];
//     this.loadCourse(); // Load the course details when the component is initialized
//   }


//   loadCourse(): void {
//     if (this.courseId) { // Ensure that courseId is defined
//       this.courseService.getCourseById(this.courseId).subscribe({
//         next: (data) => {
//           this.course = data;
//           this.courseForm.setValue({
//             name: this.course.name,
//             description: this.course.description
//           });
//         },
//         error: (err) => {
//           console.error('Error fetching course:', err);
//         }
//       });
//     } else {
//       console.error('Course ID is invalid');
//     }
//   }
  

//   // Method to load the course data
//   // loadCourse(): void {
//   //   this.courseService.getCourseById(this.courseId).subscribe({
//   //     next: (data) => {
//   //       this.course = data;
//   //       this.courseForm.setValue({
//   //         name: this.course.name,
//   //         description: this.course.description
//   //       });
//   //     },
//   //     error: (err) => {
//   //       console.error('Error fetching course:', err);
//   //     }
//   //   });
//   // }


//   updateCourse(): void {
//     if (this.courseForm.valid && this.courseId) { // Ensure courseId exists
//       const updatedCourse: Course = {
//         id: this.courseId, // Ensure the ID is included in the updated course
//         name: this.courseForm.value.name.trim(),
//         description: this.courseForm.value.description.trim()
//       };
  
//       // Pass both `id` and `updatedCourse` to the service method
//       this.courseService.updateCourse(this.courseId, updatedCourse).subscribe({
//         next: (updated) => {
//           console.log('Course updated successfully');
//           this.router.navigate(['/courses']); // Navigate back to the courses list after successful update
//         },
//         error: (err) => {
//           console.error('Error updating course:', err);
//         }
//       });
//     } else {
//       console.error('Invalid course details or course ID');
//     }
//   }
  

//   // Method to update the course
//   // updateCourse(): void {
//   //   if (this.courseForm.valid) {
//   //     const updatedCourse: Course = {
//   //       id: this.courseId,
//   //       name: this.courseForm.value.name.trim(),
//   //       description: this.courseForm.value.description.trim()
//   //     };

//   //     this.courseService.updateCourse(updatedCourse).subscribe({
//   //       next: (updated) => {
//   //         console.log('Course updated successfully');
//   //         this.router.navigate(['/courses']); // Navigate back to the courses list after successful update
//   //       },
//   //       error: (err) => {
//   //         console.error('Error updating course:', err);
//   //       }
//   //     });
//   //   } else {
//   //     console.error('Invalid course details');
//   //   }
//   // }

//   // Reset the form
//   resetForm(): void {
//     this.courseForm.reset();
//     if (this.course) {
//       this.courseForm.setValue({
//         name: this.course.name,
//         description: this.course.description
//       });
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../model/data.model';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-update-courses',
  templateUrl: './update-courses.component.html',
  styleUrls: ['./update-courses.component.css']
})
export class UpdateCoursesComponent implements OnInit {

  courseForm: FormGroup;
  courseId?: string; // To hold the course ID
  course: Course | undefined;

  constructor(
    private fb: FormBuilder, 
    private courseService: CourseService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) {
    // Initialize the form group with form controls
    this.courseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // Name is required, at least 3 characters
      description: ['', [Validators.required]],
      trainer: ['', [Validators.required]],  // Add validation for trainer
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }


  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.params['id']; // Retrieve the course ID from URL
    console.log('Course ID:', this.courseId);  // Check if the ID is being fetched correctly
    this.loadCourse(); // Fetch the course data
  }
  

  loadCourse(): void {
    if (this.courseId) { // Ensure that courseId is defined
      this.courseService.getCourseById(this.courseId).subscribe({
        next: (data) => {
          this.course = data;
          console.log('Loaded course:', this.course);  // Check if the course data is loaded properly
          this.courseForm.setValue({
            name: this.course.name,
            description: this.course.description,
            trainer: this.course.trainer,
            price: this.course.price
          });
        },
        error: (err) => {
          console.error('Error fetching course:', err);
        }
      });
    } else {
      console.error('Course ID is invalid');
    }
  }
  

  // ngOnInit(): void {
  //   // Retrieve the course ID from the route parameters
  //   this.courseId = this.activatedRoute.snapshot.params['id'];
  //   this.loadCourse(); // Load the course details when the component is initialized
  // }

  // Method to load the course data
  // loadCourse(): void {
  //   if (this.courseId) { // Ensure that courseId is defined
  //     this.courseService.getCourseById(this.courseId).subscribe({
  //       next: (data) => {
  //         this.course = data;
  //         this.courseForm.setValue({
  //           name: this.course.name,
  //           description: this.course.description
  //         });
  //       },
  //       error: (err) => {
  //         console.error('Error fetching course:', err);
  //       }
  //     });
  //   } else {
  //     console.error('Course ID is invalid');
  //   }
  // }




  updateCourse(): void {
    if (this.courseForm.valid && this.courseId) { // Ensure courseId exists
      const updatedCourse: Course = {
        id: this.courseId, // Pass the existing ID
        name: this.courseForm.value.name.trim(),
        description: this.courseForm.value.description.trim(),
        trainer: this.courseForm.value.trainer.trim(),
        price: this.courseForm.value.price
      };
  
      // Pass both `id` and `updatedCourse` to the service method
      this.courseService.updateCourse(this.courseId, updatedCourse).subscribe({
        next: () => {
          console.log('Course updated successfully');
          this.router.navigate(['/courses']); // Navigate back to the courses list after successful update
        },
        error: (err) => {
          console.error('Error updating course:', err);
        }
      });
    } else {
      console.error('Invalid course details or course ID');
    }
  }
  



  // Method to update the course
  // updateCourse(): void {
  //   if (this.courseForm.valid && this.courseId) { // Ensure courseId exists
  //     const updatedCourse: Course = {
  //       id: this.courseId, // Pass the existing ID
  //       name: this.courseForm.value.name.trim(),
  //       description: this.courseForm.value.description.trim()
  //     };

  //     // Pass both `id` and `updatedCourse` to the service method
  //     this.courseService.updateCourse(this.courseId, updatedCourse).subscribe({
  //       next: () => {
  //         console.log('Course updated successfully');
  //         this.router.navigate(['/courses']); // Navigate back to the courses list after successful update
  //       },
  //       error: (err) => {
  //         console.error('Error updating course:', err);
  //       }
  //     });
  //   } else {
  //     console.error('Invalid course details or course ID');
  //   }
  // }

  // Reset the form
  resetForm(): void {
    this.courseForm.reset();
    if (this.course) {
      this.courseForm.setValue({
        name: this.course.name,
        description: this.course.description,
        trainer: this.course.trainer,
        price: this.course.price
      });
    }
  }
}
