import {ServerApiFilter} from "../../../shared/services/api.models";

export interface EmployeeModel {
  id: number,
  name: string,
  base_price: number,
  start_date: string,
  end_date: string
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
