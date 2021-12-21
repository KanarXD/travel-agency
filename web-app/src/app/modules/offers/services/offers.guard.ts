import {Injectable} from '@angular/core';
import {CoreService} from "../../../shared/services/core.service";
import {OfferPrivilege} from "./offers.models";
import {RouteGuard} from "../../../shared/utils/app.models";

@Injectable({
  providedIn: 'root'
})
export class OffersGuard extends RouteGuard {

  constructor(
    private coreService: CoreService
  ) {
    super(OfferPrivilege.READ, coreService);
  }


}
