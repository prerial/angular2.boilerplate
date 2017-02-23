/**
 * Created by Mikhail on 2/21/2017.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import ActivateGuard from './activate-guard';
import DectivateGuard from './deactivate-guard';

@Component({
  selector: 'child-one',
  template: `
  Child One, reading parent route param.
    <b><code>Parent ID: {{ parentRouteId }}</code></b>
  `
})
export default class ChildOne {
  private sub: any;
  private parentRouteId: number;

  constructor(private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
/*
    this.sub = this.router.routerState.parent(this.route)
      .params.subscribe(params => {
        this.parentRouteId = +params["id"];
      });
*/
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
