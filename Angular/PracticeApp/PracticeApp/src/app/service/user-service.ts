import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../../app/model/user.model"
@Injectable ({
    providedIn: 'root'
})
export class UserService {
    baseUrl : string = "http://localhost:3000/user";
    constructor(private http : HttpClient) {

    }
    getUsers() {
        return this.http.get<User[]>(this.baseUrl)
    }
}