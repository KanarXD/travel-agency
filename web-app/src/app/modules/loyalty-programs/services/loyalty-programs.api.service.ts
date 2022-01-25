import {Injectable} from '@angular/core';
import {ServerApiService} from "../../../shared/services/server.api.service";
import {LoyaltyProgramModel} from "./loyalty-programs.models";
import {HttpClient} from "@angular/common/http";
import {ServerApi} from "../../../shared/utils/server.api";

@Injectable({
  providedIn: 'root'
})
export class LoyaltyProgramsApiService extends ServerApiService<LoyaltyProgramModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, ServerApi.LOYALTY_PROGRAMS);
  }

}
