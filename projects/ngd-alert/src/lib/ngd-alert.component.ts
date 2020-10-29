import { Component, OnInit } from '@angular/core';
import { Subject, merge, Observable } from 'rxjs';
import { AlertMessage, NgdAlertService } from './ngd-alert.service';

@Component({
  selector: 'ngd-alert',
  template: `
    <div class="alert" *ngIf="alertMessage$ | async as alertMessage" [ngStyle]="{background: $any(alertMessage).color}">
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ $any(alertMessage).prefix }}!</strong> {{ $any(alertMessage).message }}
    </div>
  `,
  styleUrls: ['./ngd-alert.component.css']
})
export class NgdAlertComponent implements OnInit {
  alertMessage$: Observable<AlertMessage | boolean>;
  close$: Subject<boolean> = new Subject<boolean>();

  constructor(private alertService: NgdAlertService) { }

  ngOnInit(): void {
    this.initAlert();
  }

  initAlert() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert() {
    this.close$.next();
  }
}
