import {Item} from "../../../shared/components/page/services/page.models";

export type EmployeeKeys = 'id' | 'name';

export interface EmployeeModel extends Item {
  name: string,

}

export enum EmployeePrivilege {
  READ = 'EMPLOYEES_READ',
  UPDATE = 'EMPLOYEES_UPDATE',
  DELETE = 'EMPLOYEES_DELETE'
}
