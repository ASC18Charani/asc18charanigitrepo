import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;
    constructor(private formbuilder:FormBuilder) {}

    ngOnInit() { 
    this.loginForm = this.formbuilder.group({
        loginid : ["teddy"],
        password : []
    })
}
}