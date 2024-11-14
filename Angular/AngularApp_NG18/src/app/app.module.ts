import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations: [AppComponent, LoginComponent, ListEmpComponent, UpdateEmpComponent, RegisterComponent],
    imports : [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule,FormsModule],
    // imports : [BrowserModule, HttpClientModule],
    bootstrap : [AppComponent]
})
export class AppModule{

}