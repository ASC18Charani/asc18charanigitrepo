import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private baseUrl = 'http://localhost:8080/api/courses';

  constructor(private httpclient: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.httpclient.get<Course[]>(this.baseUrl);
  }

  getCourseById(id: string): Observable<Course> {
    return this.httpclient.get<Course>(`${this.baseUrl}/${id}`);
  }

  createCourse(course: Course): Observable<Course> {
    return this.httpclient.post<Course>(this.baseUrl, course);
  }

  updateCourse(id: string, course: Course): Observable<Course> {
    return this.httpclient.put<Course>(`${this.baseUrl}/${id}`, course);
  }

  deleteCourse(id: string): Observable<Course> {
    return this.httpclient.delete<Course>(`${this.baseUrl}/${id}`);
  }
}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Course } from '../model/data.model';

// @Injectable({
//   providedIn: 'root'
// })

// export class CourseService {
//   private baseUrl = 'http://localhost:3000/courses';  // Ensure this URL is correct

//   constructor(private httpclient: HttpClient) {}

//   getCourses(): Observable<Course[]> {
//     return this.httpclient.get<Course[]>(this.baseUrl);
//   }

//   createCourse(course: Course): Observable<Course> {
//     return this.httpclient.post<Course>(this.baseUrl, course);
//   }

//   updateCourse(id: string, course: Course): Observable<Course> {
//     return this.httpclient.put<Course>(`${this.baseUrl}/${id}`, course);
//   }

//   deleteCourse(id: string): Observable<void> {
//     return this.httpclient.delete<void>(`${this.baseUrl}/${id}`);
//   }
// }