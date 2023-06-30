import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(private authService : AuthService, private router : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //let adminRole="ROLE_ADMIN";
    let adminRole="SCOPE_ADMIN";
    if(this.authService.hasRole(adminRole)){
      return true;
    } else {
      this.router.navigateByUrl("/admin/notAuthorized")
      return false;
    }
  }

}
