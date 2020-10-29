import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

type PrefixType = 'Success' | 'Danger' | 'Warning' | 'Info';

export interface AlertMessage {
  prefix: PrefixType;
  message: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class NgdAlertService {

  public alertMessage$ = new Subject<AlertMessage>();

  public createSuccessAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
  }

  public createDangerAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
  }

  public createWarningAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Warning', message, 'yellow'));
  }

  public createInfoAlert(message: string): void {
    this.alertMessage$.next(this.createAlertMessage('Info', message, 'blue'));
  }

  public createAlertMessage(prefix: PrefixType, message: string, color: string): AlertMessage {
    return {prefix, message, color};
  }
}
