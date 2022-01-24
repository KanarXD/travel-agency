import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServerApiService} from "../../../../shared/services/server.api.service";
import {CustomerModel} from "./customers.models";
import {ServerApi} from "../../../../shared/utils/server.api";

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService extends ServerApiService<CustomerModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, ServerApi.CUSTOMERS)
  }
}
