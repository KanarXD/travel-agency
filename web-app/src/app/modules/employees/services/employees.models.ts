import {Item} from "../../../shared/components/page/services/page.models";

export type EmployeeKeys =
  'id'
  | 'name'
  | 'surname'
  | 'employmentDate'
  | 'login'
  | 'password'
  | 'role';

export interface EmployeeModel extends Item {
  name: string;
  surname: string;
  employmentDate: Date;
  login: string;
  password: string;
  role: number;
}

export enum EmployeePrivilege {
  READ = 'EMPLOYEES_READ',
  UPDATE = 'EMPLOYEES_UPDATE',
  DELETE = 'EMPLOYEES_DELETE'
}
