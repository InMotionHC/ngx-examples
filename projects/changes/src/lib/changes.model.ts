export type Changes<T> = {
   [key in keyof T]: boolean;
}

export interface ChangesContext<T> {
   $implicit?: Changes<T>;
}