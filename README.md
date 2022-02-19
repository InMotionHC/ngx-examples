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
