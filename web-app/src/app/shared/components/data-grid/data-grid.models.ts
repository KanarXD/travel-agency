import {HttpMethodName} from "../../services/api.models";

export interface DataGridRowConfig<T> {
  key?: T;
  type?: FieldType;
  header?: string;
  access?: any;
  action?: HttpMethodName;
}

export enum FieldType {
  INPUT = 'input',
  IMAGE = 'img',
  BUTTON = 'button'
}

export interface ItemAction<T> {
  type: HttpMethodName,
  item: T
}

