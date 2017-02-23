/**
 * Created by Mikhail on 2/18/2017.
 */
import { AfterContentInit, Component, ElementRef } from '@angular/core';
@Component({
  selector: 'el-ref',
  template: `
<h1>My App</h1>
<pre>
<code>{{ node }}</code>
</pre>
`
})
export class ElementRefComponent implements AfterContentInit {
  node: string;
  constructor(private elementRef: ElementRef) { }
  ngAfterContentInit() {
    const tmp = document.createElement('div');
    const el = this.elementRef.nativeElement.cloneNode(true);
    tmp.appendChild(el);
    this.node = tmp.innerHTML;
  }
}
