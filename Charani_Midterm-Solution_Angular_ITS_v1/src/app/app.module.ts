import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { ListIssueComponent } from "./list-issue/list-issue.component";
import { AddIssueComponent } from "./add-issue/add-issue.component";
import { UpdateIssueComponent } from "./update-issue/update-issue.component";

@NgModule({
    declarations: [AppComponent, LoginComponent, ListIssueComponent, AddIssueComponent, UpdateIssueComponent],
    imports : [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, NgClass, FormsModule],
    bootstrap : [AppComponent]
})
export class AppModule {

}