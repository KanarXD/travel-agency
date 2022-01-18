import {ServerApiFilter} from "../../../shared/services/api.models";
import {Item} from "../../../shared/components/page/services/page.models";

export type LoyaltyProgramKeys = 'id' | 'name' | 'discount' | 'threshold';

export interface LoyaltyProgramModel extends Item {
  name: string;
  discount: number,
  threshold: number
}

export class LoyaltyProgramFilters implements ServerApiFilter {
  currentPage: number = 0;
  itemsPerPage: number = 5;
}

export enum LoyaltyProgramPrivilege {
  READ = 'LOYALTY_PROG_READ',
  UPDATE = 'LOYALTY_PROG_UPDATE',
  DELETE = 'LOYALTY_PROG_DELETE'
}
