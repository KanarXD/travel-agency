import {ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot} from "@angular/router";
import {CoreService} from "../services/core.service";
import {BehaviorSubject} from "rxjs";

export type NavRoutes = NavRoute[];

export interface NavRoute extends Route {
  title?: string;
  inNavBar?: boolean;
}

export interface UserStatus {
  isLogged: boolean;
  privilegeList: string[];
}

export class RouteGuard implements CanActivate {
  constructor(
    privilegeName: string,
    coreService: CoreService
  ) {
    coreService.userStatus$.subscribe((userStatus: UserStatus) => {
      this._isActive$.next(userStatus.isLogged && userStatus.privilegeList.includes(privilegeName))
    });
  }

  private _isActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isActive$(): BehaviorSubject<boolean> {
    return this._isActive$;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): BehaviorSubject<boolean> {
    return this._isActive$;
  }
}


