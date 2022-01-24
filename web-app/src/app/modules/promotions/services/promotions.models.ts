import {Item} from "../../../shared/components/page/services/page.models";

export type PromotionKeys = 'id' | 'name' | 'startDate' | 'endDate' | 'discount';

export interface PromotionModel extends Item {
  name: string;
  start_date: string,
  end_date: string,
  discount: number
}

export enum PromotionPrivilege {
  READ = 'PROMOTIONS_READ',
  UPDATE = 'PROMOTIONS_UPDATE',
  DELETE = 'PROMOTIONS_DELETE'
}
