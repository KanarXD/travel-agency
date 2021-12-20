import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {CoreService} from "../../../shared/services/core.service";
import {EmployeesPrivilege} from "./employees.models";

@Injectable({
  providedIn: 'root'
})
export class EmployeesGuard implements CanActivate {

  constructor(
    private coreService: CoreService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.coreService.isLogged$.getValue() && this.coreService.privilegeList$.value.includes(EmployeesPrivilege.READ);
  }

}
