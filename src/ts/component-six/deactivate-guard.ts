/**
 * Created by Mikhail on 2/22/2017.
 */
import { CanDeactivate } from '@angular/router';
import ComponentSix from './component-six';

export default class DeactivateGuard implements CanDeactivate<ComponentSix> {

  canDeactivate(component: ComponentSix) {
    let can = component.canDeactivate();
    console.log('DeactivateGuard#canDeactivate called, can: ', can);
    if (!can) {
      alert('Deactivation blocked');
      return false;
    }

    return true;
  }
}
