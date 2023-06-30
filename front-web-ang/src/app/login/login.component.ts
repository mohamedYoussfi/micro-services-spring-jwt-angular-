import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm! : FormGroup;

  constructor(private fb : FormBuilder,
              private http : HttpClient,
              private authService : AuthService,
              private router : Router
              ) {
  }
  ngOnInit() {
    this.loginForm=this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control(""),
    });
  }

  handleLogin() {
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next : (resp:any) => {
          //this.authService.token=resp.headers.get("x-auth-token")!;
          console.log(resp)
          this.authService.token=resp.body['access-token']!
          this.router.navigateByUrl('/');
          this.authService.loadProfile().subscribe({
            next :data => {
              this.authService.profile=data;
              this.authService.isAuthenticated=true;
            }
          })
        }
      })
  }
}
