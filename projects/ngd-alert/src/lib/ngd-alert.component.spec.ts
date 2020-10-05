import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdAlertComponent } from './ngd-alert.component';

describe('NgdAlertComponent', () => {
  let component: NgdAlertComponent;
  let fixture: ComponentFixture<NgdAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
