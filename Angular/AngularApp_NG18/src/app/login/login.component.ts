import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    standalone:true,
    imports:[ReactiveFormsModule,FormsModule,FormGroup],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;
    constructor(private formbuilder:FormBuilder, private router: Router) {
        console.log("LoginComponent constructor called");
    }

    ngOnInit() { 
        console.log("LoginComponent ngOnInit called");
        this.loginForm = this.formbuilder.group({
        loginid : ["teddy"],
        password : []
    });
}
onSubmit() {
    console.log(this.loginForm.value);
    const loginid : string = this.loginForm.get("loginid").value;
    const password : string = this.loginForm.get("password").value;

    if(loginid === "teddy" && password ==="pass") {
        console.log("Login successfull");
        sessionStorage.setItem("loggedIn", "yes");
        this.router.navigate(["/employees"]);
    }
    else {
        console.log("Login failed");
    }
}
}