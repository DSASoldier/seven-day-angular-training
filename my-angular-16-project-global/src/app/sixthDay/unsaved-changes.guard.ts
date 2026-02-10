import { CanDeactivateFn } from '@angular/router';
import { CanComponentDeactive } from './can-component-deactivate.interface';
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactive> = (
  component:CanComponentDeactive
) => {

  if(component && component.canDeactivate()){
    return component.canDeactivate();
  }

  return true;
};
