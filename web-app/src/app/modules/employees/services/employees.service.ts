import {Injectable} from '@angular/core';
import {ServerApiService} from "../../../shared/services/server.api.service";
import {EmployeeModel} from "./employees.models";
import {HttpClient} from "@angular/common/http";
import {ServerApi} from "../../../shared/utils/server.api";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends ServerApiService<EmployeeModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, ServerApi.EMPLOYEES);
  }

}
