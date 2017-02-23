/**
 * Created by Mikhail on 2/14/2017.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'component-one',
  templateUrl: "../html/component-one.html"
})
export default class ComponentOne {
  episodes = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    { title: 'The Kingsroad', director: 'Tim Van Patten' },
    { title: 'Lord Snow', director: 'Brian Kirk' },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
    { title: 'A Golden Crown', director: 'Daniel Minahan' },
    { title: 'You Win or You Die', director: 'Daniel Minahan' },
    { title: 'The Pointy End', director: 'Daniel Minahan' }
  ];
  exists = true;
  toggleExists() {
    this.exists = !this.exists;
  }

}
