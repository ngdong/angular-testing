import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReplaySubject} from 'rxjs';
import {TestScheduler} from 'rxjs/testing';

import {NgdAlertComponent} from './ngd-alert.component';
import {AlertMessage, NgdAlertService} from './ngd-alert.service';

describe('NgdAlertComponent:unit', () => {
  let component: NgdAlertComponent;
  let fixture: ComponentFixture<NgdAlertComponent>;
  let testScheduler: TestScheduler;
  let service: NgdAlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgdAlertComponent],
      providers: [NgdAlertService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testScheduler = new TestScheduler((acc, expt) => expect(acc).toEqual(expt));
    service = TestBed.inject(NgdAlertService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    let callOrder = [];
    beforeEach(() => {
      component.initAlert = jest.fn(() => callOrder.push('initAlert'));
    });

    it('should call init method correcly', () => {
      component.ngOnInit();
      expect(component.initAlert).toHaveBeenCalled();
      expect(callOrder[0]).toBe('initAlert');
    })
  });

  it('should call ngOnInit function', () => {
    testScheduler.run(helpers => {
      const {expectObservable} = helpers;
      const expectedMables = 'a';
      const expectedValues = {'a': undefined};

      const replaySubject$ = new ReplaySubject<boolean>();
      component.close$.subscribe(replaySubject$);

      component.closeAlert();
      expectObservable(replaySubject$).toBe(expectedMables, expectedValues);
    });
  });

  it('should call closeAlert function', () => {
    testScheduler.run(helpers => {
      const {expectObservable} = helpers;
      const expectedMables = 'a';
      const expectedValues = {a: undefined};

      const replaySubject$ = new ReplaySubject<boolean>();
      component.alertMessage$.subscribe(replaySubject$);

      component.closeAlert();
      expectObservable(replaySubject$).toBe(expectedMables, expectedValues);
    });
  });

  it('alert should be show success message', () => {
    testScheduler.run(helpers => {
      const {expectObservable} = helpers;
      const expectedMables = 'a';
      const message = 'Success message';
      const expectedValues: AlertMessage = {prefix: 'Success', message, color: 'green'};

      const replaySubject$ = new ReplaySubject<AlertMessage | boolean>();
      component.alertMessage$.subscribe(replaySubject$);

      service.createSuccessAlert(message);
      expectObservable(replaySubject$).toBe(expectedMables, {a: expectedValues});
    });
  })
});
