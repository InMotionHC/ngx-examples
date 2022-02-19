# Пример вложенных форм
```typescript
// app.model.ts
export interface Framework {
   id: number;
   name: string;
}

export interface Developer {
   name: string;
   frameworks: Framework[];
}

//frameworks.component.ts
import { Component, Input } from '@angular/core';

import { Framework } from './app.model';
import { ContainerProvider } from 'nested-forms';

@Component({
   selector: 'frameworks',
   viewProviders: [ContainerProvider],
   template: `
      <ng-container ngModelGroup="frameworks">
         <div *ngFor="let framework of frameworks">
            <input type="text" [(ngModel)]="framework.name" name="{{framework.id}}" />
         </div>
      </ng-container>
   `
})
export class FrameworksComponent {
   @Input() frameworks: Framework[];
}

// app.component.ts
import { Component } from '@angular/core';

import { Developer } from './app.model';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <input type="text" [(ngModel)]="developer.name" [name]="'name'" />
      <frameworks [frameworks]="developer.frameworks"></frameworks>
    </form>
  `
})
export class AppComponent {
  developer: Developer = { name: 'Test1', frameworks: [ 
    { id: 1, name: 'ASP.NET MVC' },
    { id: 2, name: 'Angular' },
  ]};
}
```