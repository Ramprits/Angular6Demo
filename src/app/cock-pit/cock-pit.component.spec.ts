/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CockPitComponent } from './cock-pit.component';

describe('CockPitComponent', () => {
  let component: CockPitComponent;
  let fixture: ComponentFixture<CockPitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockPitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockPitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
