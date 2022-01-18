import {ServerApiFilter} from "../../../shared/services/api.models";
import {Item} from "../../../shared/components/page/services/page.models";

export type PromotionKeys = 'id' | 'name' | 'startDate' | 'endDate' | 'discount';

export interface PromotionModel extends Item {
  name: string;
  start_date: string,
  end_date: string,
  discount: number
}

export class PromotionFilters implements ServerApiFilter {
  currentPage: number = 0;
  itemsPerPage: number = 5;
}

export enum PromotionPrivilege {
  READ = 'PROMOTIONS_READ',
  UPDATE = 'PROMOTIONS_UPDATE',
  DELETE = 'PROMOTIONS_DELETE'
}
