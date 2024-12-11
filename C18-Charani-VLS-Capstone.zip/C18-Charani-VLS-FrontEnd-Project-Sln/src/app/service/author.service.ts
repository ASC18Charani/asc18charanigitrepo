import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Author } from "../model/data.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthorService {
    private baseUrl = 'http://localhost:8080/api/v1/authors';

    constructor(private httpclient: HttpClient) {}

    getAuthor() : Observable <Author[]> {
        return this.httpclient.get<Author[]>(this.baseUrl);
    }

    getAuthorById(id: string): Observable<Author> {
        return this.httpclient.get<Author>(`${this.baseUrl}/${id}`);
      }

    createAuthor(author: Author): Observable<Author> {
        return this.httpclient.post<Author>(this.baseUrl, author);
    }

    updateAuthor(id: string, author: Author): Observable<Author> {
        return this.httpclient.put<Author>(`${this.baseUrl}/${id}`, author);
    }

    deleteAuthor(id: string): Observable<Author> {
        return this.httpclient.delete<Author>(`${this.baseUrl}/${id}`);
    }
}

