import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {CoreService} from "./core.service";
import {UserStatus} from "../utils/app.models";

@Injectable({
  providedIn: 'root'
})
export class ServerGuard implements CanActivate {

  constructor(private coreService: CoreService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let privilegeName = route.data['privilege'] as string;
    let userStatus: UserStatus = this.coreService.userStatus$.getValue();
    return userStatus.isLogged && userStatus.privilegeList.includes(privilegeName);
  }

}
