/**
 * Created by Mikhail on 2/14/2017.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'component-two',
  templateUrl: "../html/component-two.html"
})
export default class ComponentTwo {
  exists = true;
  toggleExists() {
    this.exists = !this.exists;
  }
}
