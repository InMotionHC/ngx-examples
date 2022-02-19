import { NgModule } from '@angular/core';

import { ChangesDirective } from './changes.directive';

@NgModule({
  declarations: [ChangesDirective],
  exports: [ChangesDirective]
})
export class ChangesModule { }
