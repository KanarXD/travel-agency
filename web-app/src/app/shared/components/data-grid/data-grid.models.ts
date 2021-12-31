import {ServerApiAction} from "../../services/api.models";

export interface DataGridRowConfig<T> {
  key?: T;
  type?: FieldType;
  header?: string;
  privilege?: string;
  action?: ServerApiAction;
}

export enum FieldType {
  INPUT = 'input',
  IMAGE = 'img',
  BUTTON = 'button'
}
