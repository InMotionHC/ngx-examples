import { Directive, Input, OnChanges, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

import { ChangesContext } from './changes.model';
import { getChanges } from './changes.utils';

@Directive({ selector: '[changes]' })
export class ChangesDirective<T> implements OnChanges, OnDestroy {
   @Input('changesIn') source?: T;
   @Input('changesAnd') target?: T;

   constructor(private template: TemplateRef<any>, private container: ViewContainerRef) { }

   static ngTemplateContextGuard<T>(dir: ChangesDirective<T>, ctx: unknown): ctx is ChangesContext<T> { return true; }

   ngOnChanges() {
      this.dispose();
      const changes = getChanges(this.source, this.target);
      this.container.createEmbeddedView(this.template, { $implicit: changes });
   }
   ngOnDestroy() {
      this.dispose();
   }
   private dispose() {
      this.container.clear();
   }
}