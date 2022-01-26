import {Injectable} from '@angular/core';
import {ServerApiService} from "../../../shared/services/server.api.service";
import {ReservationModel} from "./reservations.models";
import {HttpClient} from "@angular/common/http";
import {ServerApi} from "../../../shared/utils/server.api";

@Injectable({
  providedIn: 'root'
})
export class ReservationsApiService extends ServerApiService<ReservationModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, ServerApi.RESERVATIONS)
  }
}
