/**
 * Created by Mikhail on 2/18/2017.
 */
import { Component, ViewChildren } from '@angular/core';
import { AlertComponent}        from './../alert.component';

@Component({
  selector: 'view-children',
  template: `
<app-alert ok="Next" (close)="showAlert(2)">
Step 1: Learn angular
</app-alert>
<app-alert ok="Next" (close)="showAlert(3)">
Step 2: Love angular
</app-alert>
<app-alert ok="Close">
Step 3: Build app
</app-alert>
<button (click)="showAlert(1)">Show steps</button>
<button (click)="hideAlert(1)">Hide steps</button>

`
})

export class ViewChildrenComponent {
/*
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
  alertsArr = [];
  ngAfterViewInit() {
    this.alertsArr = this.alerts.toArray();
  }
  showAlert(step) {
    this.alertsArr[step - 1].show(); // step 1 is alert index 0
  }
  hideAlert() {
    this.alertsArr[step - 1].hide(); // step 1 is alert index 0
  }
*/
}
