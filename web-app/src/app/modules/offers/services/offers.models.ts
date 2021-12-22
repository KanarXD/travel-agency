import {ServerApiFilter} from "../../../shared/services/api.models";

export type OfferKeys = 'id' | 'name' | 'basePrice' | 'startDate' | 'endDate' | 'delete';

export interface OfferModel {
  id: number,
  name: string,
  base_price: number,
  start_date: string,
  end_date: string
}

export class OfferFilters implements ServerApiFilter {
  currentPage: number = 0;
  itemsPerPage: number = 5;
}

export enum OfferPrivilege {
  READ = 'OFFERS_READ',
  UPDATE = 'OFFERS_UPDATE',
  DELETE = 'OFFERS_DELETE'
}

