import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, GuardResult, MaybeAsync, Router } from "@angular/router";

@Injectable ({
    providedIn : 'root'
})

export class AuthGaurdService implements CanActivate {
    constructor (private router : Router) { }
    canActivate (route : ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
        if(sessionStorage.getItem('loggedIn') === 'yes') {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}