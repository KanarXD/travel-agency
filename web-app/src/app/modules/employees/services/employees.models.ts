import {ServerApiFilter} from "../../../shared/services/api.models";
import {Item} from "../../../shared/components/page/services/page.models";

export type EmployeeKeys = 'id' | 'name';

export interface EmployeeModel extends Item {
  name: string,

}

export class EmployeeFilters implements ServerApiFilter {
  currentPage: number = 0;
  itemsPerPage: number = 5;
}

export enum EmployeePrivilege {
  READ = 'EMPLOYEES_READ',
  UPDATE = 'EMPLOYEES_UPDATE',
  DELETE = 'EMPLOYEES_DELETE'
}
