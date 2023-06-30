import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {
 constructor(public authService : AuthService, private router : Router) {
 }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }
}
