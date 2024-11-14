import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  constructor(private formbuilder: FormBuilder, private router: Router) {
    console.log("LoginComponent constructor called");
  }

  ngOnInit(): void {
    console.log("LoginComponent ngOnInit called");
    this.loginForm = this.formbuilder.group({
      loginid : ["Charani"],
      password : []
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
    const loginid : string = this.loginForm.value.loginid;
    const password : string = this.loginForm.value.password;

    if(loginid === "Charani" && password === "pass") {
      console.log("Login Successfull");
      sessionStorage.setItem("loggedIn", "yes");
      this.router.navigate(["/users"]);
    }
    else {
      console.log("Login Failed");
    }
  }
}
