import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Registration } from "../model/data.model";
 
@Injectable({
    providedIn:"root"
})
 
export class AdminServices{
    private authUrl = 'http://localhost:8080/api/v1/registrations'
    constructor(private http:HttpClient){
 
    }
    getAuthUsers(): Observable<Registration[]> {
        return this.http.get<Registration[]>(this.authUrl);
    }
 
    
 
 
}