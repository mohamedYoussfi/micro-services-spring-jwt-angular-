import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTemplateComponent } from './customer-template.component';

describe('CustomerTemplateComponent', () => {
  let component: CustomerTemplateComponent;
  let fixture: ComponentFixture<CustomerTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
