import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdIconsComponent } from './ngd-icons.component';

describe('NgdIconsComponent', () => {
  let component: NgdIconsComponent;
  let fixture: ComponentFixture<NgdIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    const fixture = TestBed.createComponent(NgdIconsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('ngd-icons works!');
  });
});
