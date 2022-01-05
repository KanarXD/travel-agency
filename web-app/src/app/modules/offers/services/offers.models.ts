import {ServerApiFilter} from "../../../shared/services/api.models";

export type OfferKeys = 'id' | 'name' | 'basePrice' | 'startDate' | 'endDate' | 'delete' | 'hotelId' | 'carrierId';

export interface OfferModel {
  id: number,
  name: string,
  base_price: number,
  start_date: string,
  end_date: string,
  hotelId: number,
  carrierId: number
}

export class OfferFilters extends ServerApiFilter {
}

export enum OfferPrivilege {
  READ = 'OFFERS_READ',
  UPDATE = 'OFFERS_UPDATE',
  DELETE = 'OFFERS_DELETE'
}

