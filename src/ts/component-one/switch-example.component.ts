/**
 * Created by Mikhail on 2/13/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
  selector: 'switch-example',
  template: `
    <div class="tabs-selection">
      <app-tab [active]="isSelected(1)" (click)="setTab(1)">Tab 1</app-tab>
      <app-tab [active]="isSelected(2)" (click)="setTab(2)">Tab 2</app-tab>
      <app-tab [active]="isSelected(3)" (click)="setTab(3)">Tab 3</app-tab>
    </div>

    <div [ngSwitch]="tab">
      <app-tab-content *ngSwitchCase="1">Tab content 1</app-tab-content>
      <app-tab-content *ngSwitchCase="2">Tab content 2</app-tab-content>
      <app-tab-content *ngSwitchCase="3"><app-tab-3></app-tab-3></app-tab-content>
      <app-tab-content *ngSwitchDefault>Select a tab</app-tab-content>
    </div>
  `,
  styles: [`
    :host {
      font-family: Arial;
    }

    .tabs-selection {
      background-color: #ddd;
      display: flex;
      box-sizing: border-box;
      flex-direction: row;
      padding-left: 16px;
      padding-right: 16px;
      width: 100%;
    }
  `]
})


  export class SwitchExampleComponent {
  tab: number = 0;
  setTab(num: number) {
    this.tab = num;
  }
  isSelected(num: number) {
    return this.tab === num;
  }
}

@Component({
  selector: 'app-tab-content',
  template: `
    <div class="door">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      border: 1px solid #ddd;
      border-top: 0;
      margin-bottom: 2rem;
      display: block;
      padding: 8px;
    }
  `]
})
export class TabContentComponent {
}

@Component({
  selector: 'app-tab',
  template: `
    <div class="wrapper unselectable" [ngClass]="{ active: active }">
      <ng-content></ng-content>

    </div>
  `,
  styles: [`
    :host {
      cursor: pointer;
      user-select: none;
    }

    .wrapper {
      padding: 1rem;
      background-color: #ddd;
    }

    .active {
      background-color: #bbb;
    }

    .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
  `]
})
export class TabComponent {
  @Input() active: boolean = false;
}

@Component({
  selector: 'app-tab-3',
  template: `
    <div>Content from a component</div>
  `
})
export class Tab3Component {}
