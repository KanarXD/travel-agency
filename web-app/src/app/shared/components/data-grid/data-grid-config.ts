export interface DataGridRowConfig<T> {
  key?: T;
  type?: FieldTypes;
  header?: string;
  access?: any;
}

export enum FieldTypes {
  INPUT = 'input',
  IMAGE = 'img',
  BUTTON = 'button'
}
