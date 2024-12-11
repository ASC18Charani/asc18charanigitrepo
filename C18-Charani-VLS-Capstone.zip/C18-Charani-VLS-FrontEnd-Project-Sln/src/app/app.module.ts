import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { AddCoursesComponent } from './courses/add-courses/add-courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { LearnersComponent } from './learners/learners.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RegistrationComponent } from './registration/registration.component';
import { CourseService } from './service/course.service';
import { UpdateCoursesComponent } from './courses/update-courses/update-courses.component';
import { AddLearnersComponent } from './learners/add-learners/add-learners.component';
import { UpdateLearnersComponent } from './learners/update-learners/update-learners.component';
import { AddAuthorsComponent } from './authors/add-authors/add-authors.component';
import { UpdateAuthorsComponent } from './authors/update-authors/update-authors.component';
import { AddReviewsComponent } from './reviews/add-reviews/add-reviews.component';
import { UpdateReviewsComponent } from './reviews/update-reviews/update-reviews.component';
import { AddRegistrationComponent } from './registration/add-registration/add-registration.component';
import { UpdateRegistrationComponent } from './registration/update-registration/update-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    AddCoursesComponent,
    UpdateCoursesComponent,
    AuthorsComponent,
    AddAuthorsComponent,
    UpdateAuthorsComponent,
    LearnersComponent,
    AddLearnersComponent,
    UpdateLearnersComponent,
    RegistrationComponent,
    AddRegistrationComponent,
    UpdateRegistrationComponent,
    AdminRegistrationComponent,
    ReviewsComponent,
    AddReviewsComponent,
    UpdateReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
