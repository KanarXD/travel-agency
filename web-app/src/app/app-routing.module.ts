import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {OffersComponent} from "./modules/offers/components/offers/offers.component";
import {EmployeesComponent} from "./modules/employees/components/employees/employees.component";
import {NavRoutes} from "./shared/utils/app.models";
import {ServerGuard} from "./shared/services/server.guard";
import {OfferPrivilege} from "./modules/offers/services/offers.models";
import {EmployeePrivilege} from "./modules/employees/services/employees.models";
import {HotelsComponent} from "./modules/hotels/components/hotels/hotels.component";
import {CarriersComponent} from "./modules/carriers/components/carriers/carriers.component";
import {PromotionsComponent} from "./modules/promotions/components/promotions.component";
import {PromotionPrivilege} from "./modules/promotions/services/promotions.models";
import {CustomersComponent} from "./modules/customers/components/customers/customers.component";
import {LoyaltyProgramsComponent} from "./modules/loyalty-programs/components/loyalty-programs.component";
import {LoyaltyProgramPrivilege} from "./modules/loyalty-programs/services/loyalty-programs.models";

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
    title: 'CUSTOMERS',
    path: 'customers',
    component: CustomersComponent,
    canActivate: [ServerGuard],
    data: {privilege: OfferPrivilege.READ},
    inNavBar: true
  },
  {
    title: 'PROMOTIONS',
    path: 'promotions',
    component: PromotionsComponent,
    canActivate: [ServerGuard],
    data: {privilege: PromotionPrivilege.READ},
    inNavBar: true
  },
  {
    title: 'HOTELS',
    path: 'hotels',
    component: HotelsComponent,
    canActivate: [ServerGuard],
    data: {privilege: OfferPrivilege.READ},
    inNavBar: true
  },
  {
    title: 'CARRIERS',
    path: 'carriers',
    component: CarriersComponent,
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
  {
    title: 'LOYALTY PROGRAMS',
    path: 'loyalty_programs',
    component: LoyaltyProgramsComponent,
    canActivate: [ServerGuard],
    data: {privilege: LoyaltyProgramPrivilege.READ},
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
