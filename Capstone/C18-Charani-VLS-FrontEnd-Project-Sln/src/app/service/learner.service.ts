import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Learner } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})

export class LearnerService {
  private baseUrl = 'http://localhost:8080/api/v1/learners';

  constructor(private httpclient: HttpClient) {}

  getLearners(): Observable<Learner[]> {
    return this.httpclient.get<Learner[]>(this.baseUrl);
  }

  getLearnerById(id: string): Observable<Learner> {
    return this.httpclient.get<Learner>(`${this.baseUrl}/${id}`);
  }

  createLearners(learner: Learner): Observable<Learner> {
    return this.httpclient.post<Learner>(this.baseUrl, learner);
  }

  updateLearner(id: string, learner: Learner): Observable<Learner> {
    return this.httpclient.put<Learner>(`${this.baseUrl}/${id}`, learner);
  }

  deleteLearner(id: string): Observable<Learner> {
    return this.httpclient.delete<Learner>(`${this.baseUrl}/${id}`);
  }
}
