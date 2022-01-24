import {Item} from "../../../shared/components/page/services/page.models";

export type CarrierKeys = 'id' | 'name';

export interface CarrierModel extends Item {
  name: string;
}

export enum OfferPrivilege {
  READ = 'OFFERS_READ',
  UPDATE = 'OFFERS_UPDATE',
  DELETE = 'OFFERS_DELETE'
}
