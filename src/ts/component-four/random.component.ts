/**
 * Created by Mikhail on 2/20/2017.
 */
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'random-div',
  template: `Random: {{ value }}`
})
export class RandomComponent {
  value: number;

  constructor(@Inject('Random') r:number) {
    this.value = r;
  }
}
