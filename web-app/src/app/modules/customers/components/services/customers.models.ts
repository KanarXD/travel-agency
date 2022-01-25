import {Item} from "../../../../shared/components/page/services/page.models";

export type CustomerKeys = 'id' | 'name' | 'surname' | 'loyaltyProgramId';

export interface CustomerModel extends Item {
  id: number;
  name: string;
  surname: string;
  loyaltyProgramId: number
}

export enum CustomersPrivilege {
  READ = 'CUSTOMERS_READ',
  UPDATE = 'CUSTOMERS_UPDATE',
  DELETE = 'CUSTOMERS_DELETE'
}
