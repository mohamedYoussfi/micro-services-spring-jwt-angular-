import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated :boolean = false;
  token! :any;
  profile : any;
  constructor(private http: HttpClient) { }

  login(username : string, password : string){
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post('http://localhost:8888/auth-jwt-service/auth',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded'),
        observe : 'response'
      }
    );
  }
  loadProfile() {
    return this.http.get("http://localhost:8888/auth-jwt-service/profile");
  }

  logout() {
    this.profile=undefined;
    this.token=undefined;
  }
  hasRole(role : string):boolean{
    let filter = this.profile.authorities.filter((a:any)=>a.authority==role);
    return filter.length>0;
  }
}
