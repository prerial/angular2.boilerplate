/**
 * Created by Mikhail on 2/14/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import ComponentOne from './component-one/component-one';
import ComponentTwo from './component-two/component-two';
import ComponentThree from './component-three/component-three';
import ComponentFour from './component-four/component-four';
import ComponentFive from './component-five/component-five';
import ComponentSix from './component-six/component-six';
//import ChildOne from './component-six/child-one';
//import ChildTwo from './component-six/child-two';
import ActivateGuard from './component-six/activate-guard';
import DeactivateGuard from './component-six/deactivate-guard';
//import ComponentAux from './component-six/component-aux';
import ComponentSeven from './component-seven/component-seven';

export const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOne },
  { path: 'component-two', component: ComponentTwo },
  { path: 'component-three', component: ComponentThree },
  { path: 'component-four', component: ComponentFour },
  { path: 'component-five', component: ComponentFive },
  { path: 'component-seven', component: ComponentSeven },
  { path: 'component-six', component: ComponentSix,
    canActivate: [ActivateGuard],
    canDeactivate: [DeactivateGuard]//,
/*
    children: [
      { path: '', redirectTo: 'child-one', pathMatch: 'full' },
      { path: 'child-one', component: ChildOne },
      { path: 'child-two', component: ChildTwo }
    ]
*/
  }//,
//  { path: 'component-aux', component: ComponentAux, outlet: 'sidebar' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
