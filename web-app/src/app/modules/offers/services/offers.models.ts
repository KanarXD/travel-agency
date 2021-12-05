export type OfferKeys = 'id' | 'name' | 'basePrice' | 'startDate' | 'endDate';

export interface OfferModel {
  id: bigint,
  name: string,
  base_price: number,
  start_date: string,
  end_date: string
}
