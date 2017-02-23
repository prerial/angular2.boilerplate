/**
 * Created by Mikhail on 2/14/2017.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'component-three',
  templateUrl: "../html/component-three.html"
})
export default class ComponentThree {
  exists = true;
  toggleExists() {
    this.exists = !this.exists;
  }
}
