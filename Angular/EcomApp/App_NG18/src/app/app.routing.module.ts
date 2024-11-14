import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: 'welcome', component: LoginComponent }
]

@NgModule({
    declarations: [AppComponent],
    imports: [RouterModule.forRoot(routes)],
    // imports : [BrowserModule, HttpClientModule],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppRoutingModule {

}