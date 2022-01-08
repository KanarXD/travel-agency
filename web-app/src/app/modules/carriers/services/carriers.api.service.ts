import {Injectable} from '@angular/core';
import {ServerApiService} from "../../../shared/services/server.api.service";
import {CarrierModel} from "./carriers.models";
import {HttpClient} from "@angular/common/http";
import {ServerApi} from "../../../shared/utils/server.api";

@Injectable({
  providedIn: 'root'
})
export class CarriersApiService extends ServerApiService<CarrierModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, ServerApi.CARRIERS);
  }

}
