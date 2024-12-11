import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Registration } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {
  private baseUrl = 'http://localhost:8080/api/v1/registrations';

  constructor(private httpclient: HttpClient) {}

  getRegistrations(): Observable<Registration[]> {
    return this.httpclient.get<Registration[]>(this.baseUrl);
  }

  getRegistrationById(id: string): Observable<Registration> {
    return this.httpclient.get<Registration>(`${this.baseUrl}/${id}`);
  }

  createRegistration(registration: Registration): Observable<Registration> {
    console.log(this.baseUrl, '>>>>>>', registration)
    return this.httpclient.post<Registration>(this.baseUrl, registration);
  }

  checkEmailInUse(email: string): Observable<Registration> {
    console.log('checkEmailInUse >>> ' + email +'>>> ' +  `${this.baseUrl}/email/${email}`);
    console.log("SENDING REQUEST : ")
    return this.httpclient.get<Registration>(`${this.baseUrl}/email/${email}`) // Email is in use if response array is not empty
  }
  

  checkPhoneInUse(phone: string): Observable<boolean> {
    return this.httpclient.get<Registration[]>(`${this.baseUrl}?phone=${phone}`).pipe(
      map((response) => response.length > 0) // Phone is in use if response array is not empty
    );
  }

  validateCredentials(email: string, password: string): Observable<boolean> {
    return this.httpclient
      .get<Registration[]>(`${this.baseUrl}?email=${email}&password=${password}`)
      .pipe(map((response) => response.length > 0)); // Return true if a matching record is found
  }
  
  

  updateRegistration(id: string, registration: Registration): Observable<Registration> {
    return this.httpclient.put<Registration>(`${this.baseUrl}/${id}`, registration);
  }

  deleteRegistration(id: string): Observable<Registration> {
    return this.httpclient.delete<Registration>(`${this.baseUrl}/${id}`);
  }
}
