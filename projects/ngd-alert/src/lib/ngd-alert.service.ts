import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
  
  public createSuccessAlert(message: string) {
    this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
  }

  public createDangerAlert(message: string) {
    this.alertMessage$.next(this.createAlertMessage('Danger', message, 'green'));
  }

  public createWarningAlert(message: string) {
    this.alertMessage$.next(this.createAlertMessage('Warning', message, 'green'));
  }

  public createInfoAlert(message: string) {
    this.alertMessage$.next(this.createAlertMessage('Info', message, 'green'));
  }

  public createAlertMessage(prefix: PrefixType, message: string, color: string): AlertMessage {
    return { prefix, message, color };
  }
}
