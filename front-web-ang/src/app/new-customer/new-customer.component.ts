import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  formGroup! : FormGroup;
  constructor(private fb : FormBuilder, private http: HttpClient) {
  }
  ngOnInit() {
    this.formGroup=this.fb.group({
      name : this.fb.control(""),
      email : this.fb.control("")
    });
  }

  handleSaveCustomer() {
    let customer = this.formGroup.value;
    this.http.post("http://localhost:8888/customer-service/customers", customer)
      .subscribe({
        next : (data)=>{
          alert("Success => "+JSON.stringify(data));
        },
        error : err => {
          //alert("Error => "+JSON.stringify(err));
        }
      })
  }
}
