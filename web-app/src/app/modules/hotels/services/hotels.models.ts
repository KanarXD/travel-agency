import {ServerApiFilter} from "../../../shared/services/api.models";
import {Item} from "../../../shared/components/page/services/page.models";

export type HotelKeys = 'id' | 'name' | 'location';

export interface HotelModel extends Item {
  name: string;
  location: string;
}

export class HotelFilters implements ServerApiFilter {
  currentPage: number = 0;
  itemsPerPage: number = 5;
}
