import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../model/data.model';
import { Author } from '../model/data.model';
import { Learner } from '../model/data.model';
import { Registration } from '../model/data.model';
import { Review } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    baseUrl : string = "http://localhost:3000";
//   private dataUrl = 'service/data.json'; // Path to the JSON file

  constructor(private httpClient: HttpClient) {}

  // Fetch all courses
  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.baseUrl}/courses`);
  }

  // Fetch all authors
  getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(`${this.baseUrl}/authors`);
  }

  // Fetch all learners
  getLearners(): Observable<Learner[]> {
    return this.httpClient.get<Learner[]>(`${this.baseUrl}/learners`);
  }

  // Fetch all registrations
  getRegistrations(): Observable<Registration[]> {
    return this.httpClient.get<Registration[]>(`${this.baseUrl}/registrations`);
  }

  // Fetch all reviews
  getReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseUrl}/reviews`);
  }
}
