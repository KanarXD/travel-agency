import {Item} from "../../../shared/components/page/services/page.models";

export type ReservationKeys = 'id' | 'offerId' | 'customerId' | 'reservationTimestamp';

export interface ReservationModel extends Item {
  offerId: number;
  customerId: number;
  reservationTimestamp: string
}

export enum ReservationsPrivilege {
  READ = 'RESERVATIONS_READ',
  UPDATE = 'RESERVATIONS_UPDATE',
  DELETE = 'RESERVATIONS_DELETE'
}
