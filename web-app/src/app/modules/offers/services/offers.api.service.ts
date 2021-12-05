import {Injectable} from '@angular/core';
import {ServerApiService} from "../../../shared/services/server.api.service";
import {HttpClient} from "@angular/common/http";
import {ServerApi} from "../../../shared/utils/server.api";
import {OfferModel} from "./offers.models";

@Injectable({
  providedIn: 'root'
})
export class OffersApiService extends ServerApiService<OfferModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, ServerApi.OFFERS);
  }

}
