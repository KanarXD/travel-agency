import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {OffersComponent} from "./modules/offers/components/offers/offers.component";
import {EmployeesComponent} from "./modules/employees/components/employees/employees.component";
import {OffersGuard} from "./modules/offers/services/offers.guard";
import {EmployeesGuard} from "./modules/employees/services/employees.guard";
import {NavRoutes} from "./shared/utils/app.models";

export const appNavRoutes: NavRoutes = [
  {title: 'HOME', path: '', component: HomeComponent, inNavBar: true},
  {title: 'OFFERS', path: 'offers', component: OffersComponent, canActivate: [OffersGuard], inNavBar: true},
  {title: 'EMPLOYEES', path: 'employees', component: EmployeesComponent, canActivate: [EmployeesGuard], inNavBar: true},
  {path: '**', redirectTo: '/', inNavBar: false}
];

@NgModule({
  imports: [RouterModule.forRoot(appNavRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
