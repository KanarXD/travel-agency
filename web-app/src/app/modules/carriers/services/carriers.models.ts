import {ServerApiFilter} from "../../../shared/services/api.models";
import {Item} from "../../../shared/components/page/services/page.models";

export type CarrierKeys = 'id' | 'name';

export interface CarrierModel extends Item {
  name: string;
}

export class CarrierFilters implements ServerApiFilter {
  currentPage: number = 0;
  itemsPerPage: number = 5;
}

export enum OfferPrivilege {
  READ = 'OFFERS_READ',
  UPDATE = 'OFFERS_UPDATE',
  DELETE = 'OFFERS_DELETE'
}
