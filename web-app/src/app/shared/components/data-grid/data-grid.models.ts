import {ServerApiAction} from "../../services/api.models";
import {ServerApiService} from "../../services/server.api.service";
import {Item} from "../page/services/page.models";

export interface DataGridRowConfig<T extends string> {
  key?: T | T[];
  type?: FieldType;
  header?: string;
  privilege?: string;
  action?: ServerApiAction;
  service?: ServerApiService<Item>;
  endpoint?: string;
}

export enum FieldType {
  INPUT = 'input',
  IMAGE = 'img',
  BUTTON = 'button',
  REFERENCE = 'reference'
}
