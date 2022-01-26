import {Item} from "../../../shared/components/page/services/page.models";

export type RoleKeys = 'id' | 'name';

export interface RoleModel extends Item {
  id: number;
  name: string;
}

export enum RolePrivilege {
  READ = 'ROLES_READ',
  UPDATE = 'ROLES_UPDATE',
  DELETE = 'ROLES_DELETE'
}
