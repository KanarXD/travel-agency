import {Injectable} from '@angular/core';
import {ServerApiService} from "../../../shared/services/server.api.service";
import {HotelModel} from "./hotels.models";
import {HttpClient} from "@angular/common/http";
import {ServerApi} from "../../../shared/utils/server.api";

@Injectable({
  providedIn: 'root'
})
export class HotelsApiService extends ServerApiService<HotelModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, ServerApi.HOTELS);
  }

}
