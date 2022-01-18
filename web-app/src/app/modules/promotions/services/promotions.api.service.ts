import {Injectable} from '@angular/core';
import {ServerApiService} from "../../../shared/services/server.api.service";
import {PromotionModel} from "./promotions.models";
import {HttpClient} from "@angular/common/http";
import {ServerApi} from "../../../shared/utils/server.api";

@Injectable({
  providedIn: 'root'
})
export class PromotionsApiService extends ServerApiService<PromotionModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, ServerApi.PROMOTIONS);
  }

}
