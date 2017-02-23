/**
 * Created by Mikhail on 2/14/2017.
 */
import {Component} from '@angular/core';
import ActivateGuard from './activate-guard';

@Component({
  selector: 'component-six',
  templateUrl: "../html/component-six.html"
})
export default class ComponentSix {
  private checked:boolean = false;

  constructor() {}

  canDeactivate() {
    return this.checked;
  }

  checkboxChanged(checked:boolean) {
    this.checked = checked;
  }
}
