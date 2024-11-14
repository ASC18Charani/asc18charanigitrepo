import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class UserService {
    baseUrl : string = "http://localhost:3000/user";
    constructor(private httpClient : HttpClient) {
    }

    getUsers() {
        return this.httpClient.get<User[]>(this.baseUrl);
    }
    getUserById(id:number) {
        return this.httpClient.get<User>(this.baseUrl + "/" + id);
    }
    createUser(user: User) {
        return this.httpClient.post(this.baseUrl, user);
    }
    updateUser(id: number, user:any) {
        return this.httpClient.put(`${this.baseUrl}/${id}`, user);
    }
    deleteUser(id: number){
        return this.httpClient.delete(this.baseUrl + "/" + id);
    }
    
}