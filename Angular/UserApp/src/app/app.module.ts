import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { ListUserComponent } from "./list-user/list-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { NgClass } from "@angular/common";

@NgModule({
    declarations: [AppComponent, LoginComponent, ListUserComponent,AddUserComponent, UpdateUserComponent],
    imports : [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, NgClass, FormsModule],
    bootstrap : [AppComponent]
})
export class AppModule {
    
}