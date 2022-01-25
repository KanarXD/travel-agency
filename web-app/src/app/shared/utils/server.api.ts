import {environment} from "../../../environments/environment";

export class ServerApi {
  static LOGIN = environment.SERVER_API_URL + '/login';
  static LOGOUT = environment.SERVER_API_URL + '/logout';

  static OFFERS = environment.SERVER_API_URL + '/offers';
  static EMPLOYEES = environment.SERVER_API_URL + '/employees';
  static CUSTOMERS = environment.SERVER_API_URL + '/customers';
  static RESERVATIONS = environment.SERVER_API_URL + '/reservations';
  static PROMOTIONS = environment.SERVER_API_URL + '/promotions';
  static HOTELS = environment.SERVER_API_URL + '/hotels';
  static CARRIERS = environment.SERVER_API_URL + '/carriers';
  static LOYALTY_PROGRAMS = environment.SERVER_API_URL + '/loyalty_programs';

}
