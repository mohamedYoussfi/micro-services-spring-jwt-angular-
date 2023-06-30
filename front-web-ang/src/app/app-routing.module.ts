import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {CustomerTemplateComponent} from "./customer-template/customer-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {AdminGuard} from "./guards/admin.guard";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [

  {path : "login", component : LoginComponent},
  {
    path : "admin", component : CustomerTemplateComponent, canActivate :[ AuthGuard], children :[
      {path : "customers", component : CustomersComponent},
      {path : "profile", component : ProfileComponent},
      {path : "notAuthorized", component : NotAuthorizedComponent},
      {path : "newCustomer", component : NewCustomerComponent, canActivate : [AdminGuard]},
    ]
  },
  {path : "home", component : HomeComponent},
  {path : "", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
