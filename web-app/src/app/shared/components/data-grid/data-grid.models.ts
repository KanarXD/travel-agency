import {ServerApiAction} from "../../services/api.models";
import {ServerApiService} from "../../services/server.api.service";
import {Item} from "../page/services/page.models";
import {Observable} from "rxjs";

export interface DataGridRowConfig<T extends string> {
  key?: T;
  type?: FieldType;
  header?: string;
  privilege?: string;
  action?: ServerApiAction;
  service?: ServerApiService<Item>;
  serviceFunction?: (id: number) => Observable<string>;
}

export enum FieldType {
  INPUT = 'input',
  IMAGE = 'img',
  BUTTON = 'button',
  REFERENCE = 'reference'
}
