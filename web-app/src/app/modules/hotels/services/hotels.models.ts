import {Item} from "../../../shared/components/page/services/page.models";

export type HotelKeys = 'id' | 'name' | 'location';

export interface HotelModel extends Item {
  name: string;
  location: string;
}

export enum OfferPrivilege {
  READ = 'OFFERS_READ',
  UPDATE = 'OFFERS_UPDATE',
  DELETE = 'OFFERS_DELETE'
}
