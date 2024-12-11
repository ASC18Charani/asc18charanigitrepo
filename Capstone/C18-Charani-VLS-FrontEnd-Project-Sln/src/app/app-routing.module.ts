import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { LearnersComponent } from './learners/learners.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AuthGuardService } from "./service/auth-guard.service";
import { RegistrationComponent } from './registration/registration.component';
import { AddCoursesComponent } from './courses/add-courses/add-courses.component';
import { UpdateCoursesComponent } from './courses/update-courses/update-courses.component';
import { AddLearnersComponent } from './learners/add-learners/add-learners.component';
import { UpdateLearnersComponent } from './learners/update-learners/update-learners.component';
import { AddAuthorsComponent } from './authors/add-authors/add-authors.component';
import { UpdateAuthorsComponent } from './authors/update-authors/update-authors.component';
import { AddReviewsComponent } from './reviews/add-reviews/add-reviews.component';
import { UpdateReviewsComponent } from './reviews/update-reviews/update-reviews.component';
import { AddRegistrationComponent } from './registration/add-registration/add-registration.component';
import { UpdateRegistrationComponent } from './registration/update-registration/update-registration.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuardService] },
  { path: 'addcourse', component: AddCoursesComponent, canActivate: [AuthGuardService] },
  { path: 'updatecourse/:id', component: UpdateCoursesComponent, canActivate: [AuthGuardService] },
  { path: 'authors', component: AuthorsComponent, canActivate: [AuthGuardService] },
  { path: 'addauthor', component: AddAuthorsComponent, canActivate: [AuthGuardService] },
  { path: 'updateauthor/:id', component: UpdateAuthorsComponent, canActivate: [AuthGuardService] },
  { path: 'learners', component: LearnersComponent, canActivate: [AuthGuardService] },
  { path: 'addlearner', component: AddLearnersComponent, canActivate: [AuthGuardService] },
  { path: 'updatelearner/:id', component: UpdateLearnersComponent, canActivate: [AuthGuardService] },
  { path: 'registrations', component: RegistrationComponent },
  { path: 'addregistration', component: AddRegistrationComponent, canActivate: [AuthGuardService] },
  { path: 'updateregistration/:id', component: UpdateRegistrationComponent, canActivate: [AuthGuardService] },
  { path: 'admin-registration', component: AdminRegistrationComponent },
  { path: 'reviews', component: ReviewsComponent, canActivate: [AuthGuardService] },
  { path: 'addreview', component: AddReviewsComponent, canActivate: [AuthGuardService] },
  { path: 'updatereview/:id', component: UpdateReviewsComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '' } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
