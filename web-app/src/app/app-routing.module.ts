import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {OffersComponent} from "./modules/offers/components/offers/offers.component";
import {EmployeesComponent} from "./modules/employees/components/employees/employees.component";
import {NavRoutes} from "./shared/utils/app.models";
import {ServerGuard} from "./shared/services/server.guard";
import {OfferPrivilege} from "./modules/offers/services/offers.models";
import {EmployeePrivilege} from "./modules/employees/services/employees.models";

export const appNavRoutes: NavRoutes = [
  {title: 'HOME', path: '', component: HomeComponent, inNavBar: true},
  {
    title: 'OFFERS',
    path: 'offers',
    component: OffersComponent,
    canActivate: [ServerGuard],
    data: {privilege: OfferPrivilege.READ},
    inNavBar: true
  },
  {
    title: 'EMPLOYEES',
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [ServerGuard],
    data: {privilege: EmployeePrivilege.READ},
    inNavBar: true
  },
  {path: '**', redirectTo: '/', inNavBar: false}
];

@NgModule({
  imports: [RouterModule.forRoot(appNavRoutes, {preloadingStrategy: PreloadAllModules, urlUpdateStrategy: 'eager'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
