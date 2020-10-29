import {interval, ReplaySubject} from 'rxjs';
import {TestScheduler} from 'rxjs/testing';
import {AlertMessage, NgdAlertService} from './ngd-alert.service';
import {take} from 'rxjs/operators';
import {TestBed} from '@angular/core/testing';

describe('NgdAlertService:unit', () => {
  let service: NgdAlertService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgdAlertService]
    });
    service = TestBed.inject(NgdAlertService);
    testScheduler = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should stream success message', (done) => {
    const message = 'Success! This alert box indicates a successful or positive action.';
    const expectedMessage: AlertMessage = {prefix: 'Success', message, color: 'green'};
    service.alertMessage$.subscribe(result => {
      expect(result).toEqual(expectedMessage);
      done();
    });
    service.createSuccessAlert(message);
  });

  it('should stream info message', () => {
    testScheduler.run(({expectObservable}) => {
      const message = 'Info! This alert box indicates a neutral informative change or action.';
      const expectedMessage: AlertMessage = {prefix: 'Info', message, color: 'blue'};

      const replaySubject$ = new ReplaySubject<AlertMessage>();
      service.alertMessage$.subscribe(replaySubject$);

      service.createInfoAlert(message);
      expectObservable(replaySubject$).toBe('a', {a: expectedMessage});
    })
  });

  it('should stream warning message', () => {
    testScheduler.run(({expectObservable}) => {
      const message = 'Warning! This alert box indicates a warning that might need attention.';
      const expectedMessage: AlertMessage = {prefix: 'Warning', message, color: 'yellow'};

      const replaySubject$ = new ReplaySubject<AlertMessage>();
      service.alertMessage$.subscribe(replaySubject$);

      service.createWarningAlert(message);
      expectObservable(replaySubject$).toBe('a', {a: expectedMessage});
    })
  });

  it('should stream danger message', () => {
    testScheduler.run(({expectObservable}) => {
      const message = 'Danger! This alert box indicates a dangerous or potentially negative action.';
      const expectedMessage: AlertMessage = {prefix: 'Danger', message, color: 'red'};

      const replaySubject$ = new ReplaySubject<AlertMessage>();
      service.alertMessage$.subscribe(replaySubject$);

      service.createDangerAlert(message);
      expectObservable(replaySubject$).toBe('a', {a: expectedMessage});
    })
  });

  it('should emit a number every second and complete after 5 emissions', () => {
    testScheduler.run(({expectObservable}) => {
      const expectMables = '1s a 999ms b 999ms c 999ms d 999ms (e|)';
      const expectValues = {a: 0, b: 1, c: 2, d: 3, e: 4};

      const source$ = interval(1000).pipe(take(5));
      expectObservable(source$).toBe(expectMables, expectValues);
    })
  })
});
