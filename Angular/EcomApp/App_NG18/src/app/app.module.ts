import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [AppComponent, LoginComponent],
    imports : [BrowserModule, AppRoutingModule],
    // imports : [BrowserModule, HttpClientModule],
    bootstrap : [AppComponent]
})
export class AppModule{

}