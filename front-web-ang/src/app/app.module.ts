import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AppHttpInterceptor} from "./services/app-http.interceptor";
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerTemplateComponent } from './customer-template/customer-template.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    AppNavbarComponent,
    HomeComponent,
    ProfileComponent,
    CustomerTemplateComponent,
    NewCustomerComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS, useClass : AppHttpInterceptor, multi :true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
