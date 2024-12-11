import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    // Simulated authentication check
    return !!localStorage.getItem('admin'); // Checks if a user is logged in
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/']); // Redirect to login if not authenticated
      return false;
    }
    return true;
  }
  logout(): void {
    localStorage.removeItem('admin');
    sessionStorage.clear(); 
    this.router.navigate(['/']);
  }
}

