import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgdAlertComponent } from './ngd-alert.component';

@NgModule({
  declarations: [NgdAlertComponent],
  imports: [ CommonModule ],
  exports: [NgdAlertComponent]
})
export class NgdAlertModule { }
