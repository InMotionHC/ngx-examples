# Пример директивы изменений
```typescript
// app.component.ts
import { Component } from '@angular/core';

interface Person {
   name: string;
   age: number;
}

@Component({
  selector: 'app-root',
  template: `
   <ng-container *changes="let changes in test1 and test2">
      <div *ngIf="changes?.name">name - {{ changes.name }}</div>
      <div *ngIf="changes?.age">age - {{ changes.age }}</div>
   </ng-container>
  `
})
export class AppComponent {
  test1: Person = { name: 'Test1', age: 22 };
  test2: Person = { name: 'Test2', age: 22 };
}
```

### Результат
```html
  name - true
```

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