/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieChart1Component } from './pie-chart1.component';

describe('PieChart1Component', () => {
  let component: PieChart1Component;
  let fixture: ComponentFixture<PieChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
