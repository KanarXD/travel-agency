export type OfferKeys =
  'id'
  | 'name'
  | 'basePrice'
  | 'price'
  | 'startDate'
  | 'endDate'
  | 'delete'
  | 'promotionId'
  | 'hotelId'
  | 'carrierId';

export interface OfferModel {
  id: number,
  name: string,
  base_price: number,
  start_date: string,
  end_date: string,
  promotionId: number,
  hotelId: number,
  carrierId: number
}

export enum OfferPrivilege {
  READ = 'OFFERS_READ',
  UPDATE = 'OFFERS_UPDATE',
  DELETE = 'OFFERS_DELETE'
}

