import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {CoreService} from "../../../shared/services/core.service";
import {OfferPrivilege} from "./offers.models";
import {NavRoute} from "../../../shared/utils/app.models";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OffersGuard implements CanActivate {
  active$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private coreService: CoreService
  ) {
    coreService.isLogged$.subscribe((isLogged: boolean) =>
      this.active$.next(isLogged && this.coreService.privilegeList$.value.includes(OfferPrivilege.READ))
    )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): BehaviorSubject<boolean> {
    return this.active$;
  }

}
