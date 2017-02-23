/**
 * Created by Mikhail on 2/18/2017.
 */
import { Component, ViewChild } from '@angular/core';
import { AlertComponent}        from './../alert.component';

@Component({
  selector: 'view-child',
  template: `
<app-alert>My alert</app-alert>
<button (click)="showAlert()">Show Alert</button>
<button (click)="hideAlert()">Hide Alert</button>
`
})
export class ViewChildComponent {
  @ViewChild(AlertComponent) alert: AlertComponent;
  showAlert() {
    this.alert.show();
  }
  hideAlert() {
    this.alert.hide();
  }
}
