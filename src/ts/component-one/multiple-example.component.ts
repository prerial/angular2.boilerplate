/**
 * Created by Mikhail on 2/13/2017.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'multiple-example',
  template: `
    <template ngFor [ngForOf]="[1,2,3,4,5,6]" let-item>
      <div *ngIf="item > 3">
        {{item}}
      </div>
    </template>
  `
})
export class MultipleStructuralComponent {

}
