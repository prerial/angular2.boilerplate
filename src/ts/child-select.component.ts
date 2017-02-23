/**
 * Created by Mikhail on 2/13/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'child-select',
  templateUrl: '../html/child-select.component.html'
})
export class ChildSelectComponent {
  exists = true;
  toggleExists() {
    this.exists = !this.exists;
  }
}
