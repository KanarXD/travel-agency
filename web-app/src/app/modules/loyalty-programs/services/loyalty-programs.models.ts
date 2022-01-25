import {Item} from "../../../shared/components/page/services/page.models";

export type LoyaltyProgramKeys = 'id' | 'name' | 'discount' | 'threshold';

export interface LoyaltyProgramModel extends Item {
  id: number;
  name: string;
  discount: number,
  threshold: number
}

export enum LoyaltyProgramPrivilege {
  READ = 'LOYALTY_PROG_READ',
  UPDATE = 'LOYALTY_PROG_UPDATE',
  DELETE = 'LOYALTY_PROG_DELETE'
}
