import { Changes } from "./changes.model";

export function isDefined(value: any) {
   return value !== null && value !== undefined;
}

export function getChanges<T>(lhs?: T, rhs?: T): Changes<T> | null {
   const source = lhs as any;
   const target = rhs as any;
   if (!isDefined(source) || !isDefined(target)) {
      return null;
   }
   const changes: any = {};
   Object.keys(source).forEach(key => changes[key] = source[key] !== target[key]);
   const hasChanges = Object.keys(changes).some(key => changes[key] === true);
   return hasChanges ? changes : null;
}