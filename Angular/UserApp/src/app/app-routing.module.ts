import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { AuthGaurdService } from "./service/auth-guard.service";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { AddUserComponent } from "./add-user/add-user.component";

const routes: Routes= [
    { path:"login", component: LoginComponent},
    { path: "users", component: ListUserComponent, canActivate: [AuthGaurdService] },
    { path: "adduser", component: AddUserComponent, canActivate:[AuthGaurdService]},
    { path: "update/:id", component: UpdateUserComponent },
    { path: "**", component: LoginComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

}