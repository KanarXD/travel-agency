import {Injectable} from '@angular/core';
import {ServerApiService} from "../../../shared/services/server.api.service";
import {HttpClient} from "@angular/common/http";
import {ServerApi} from "../../../shared/utils/server.api";
import {RoleModel} from "./roles.modols";

@Injectable({
  providedIn: 'root'
})
export class RolesApiService extends ServerApiService<RoleModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, ServerApi.ROLES);
  }

}
