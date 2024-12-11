import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  private baseUrl = 'http://localhost:8080/api/v1/reviews';

  constructor(private httpclient: HttpClient) {}

  getReviews(): Observable<Review[]> {
    return this.httpclient.get<Review[]>(this.baseUrl);
  }

  getReviewById(id: string): Observable<Review> {
    return this.httpclient.get<Review>(`${this.baseUrl}/${id}`);
  }

  createReview(review: Review): Observable<Review> {
    return this.httpclient.post<Review>(this.baseUrl, review);
  }

  updateReview(id: string, review: Review): Observable<Review> {
    return this.httpclient.put<Review>(`${this.baseUrl}/${id}`, review);
  }

  deleteReview(id: string): Observable<Review> {
    return this.httpclient.delete<Review>(`${this.baseUrl}/${id}`);
  }
}
