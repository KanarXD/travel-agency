import {environment} from "../../../environments/environment";

export class ServerApi {
  static OFFERS = environment.SERVER_API_URL + '/offers';
  static EMPLOYEES = environment.SERVER_API_URL + '/employees';
}