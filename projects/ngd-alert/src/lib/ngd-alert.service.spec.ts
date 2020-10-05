import { TestScheduler } from 'rxjs/testing';
import { AlertMessage, NgdAlertService } from './ngd-alert.service';

describe('NgdAlertService', () => {
  let service: NgdAlertService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    service = new NgdAlertService();
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    })
  });

  it('should stream success message', () => {
    testScheduler.run(({expectObservable}) => {
      const message = 'Hello world';
      const expectedMessage: AlertMessage = { prefix: 'Success', message, color: 'green'};
  
      service.createSuccessAlert(message);
      expectObservable(service.alertMessage$).toBe('a', { a: expectedMessage });
    })
  });
});
