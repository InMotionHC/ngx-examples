import { Provider, Optional, SkipSelf } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

export const ContainerProvider: Provider = {
   provide: ControlContainer,
   deps: [[Optional, SkipSelf, ControlContainer]],
   useFactory: (container: ControlContainer) => container ?? new NgForm(null, null),
};