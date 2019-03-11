import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderMenuComponent } from './order-menu.component';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MenuComponent', () => {
  let component: OrderMenuComponent;
  let fixture: ComponentFixture<OrderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
