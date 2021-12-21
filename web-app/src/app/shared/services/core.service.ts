import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {NavRoutes} from "../utils/app.models";
import {HomeComponent} from "../../modules/home/home.component";
import {OffersComponent} from "../../modules/offers/components/offers/offers.component";
import {OffersGuard} from "../../modules/offers/services/offers.guard";
import {EmployeesComponent} from "../../modules/employees/components/employees/employees.component";
import {EmployeesGuard} from "../../modules/employees/services/employees.guard";

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  privilegeList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  navRoutes: NavRoutes = [
    {path: '', component: HomeComponent},
    {path: 'offers', component: OffersComponent, canActivate: [OffersGuard]},
    {path: 'employees', component: EmployeesComponent, canActivate: [EmployeesGuard]},
    {path: '**', redirectTo: '/'}
  ];

  isLogged(): boolean {
    return this.isLogged$.value;
  }

}
