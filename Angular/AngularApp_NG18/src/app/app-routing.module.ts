import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGaurdService } from "./service/auth-guard.service";

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'employees', component: ListEmpComponent, canActivate: [AuthGaurdService] },
    { path: 'update/:id', component: UpdateEmpComponent },
    { path: 'register', component: RegisterComponent },
    { path: "**", component: LoginComponent}
]

@NgModule({
    // declarations: [AppComponent],
    imports: [RouterModule.forRoot(routes)],
    // imports : [BrowserModule, HttpClientModule],
    exports: [RouterModule],
    // bootstrap: [AppComponent]
})
export class AppRoutingModule {

}