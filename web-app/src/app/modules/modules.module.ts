import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {OffersComponent} from "./offers/components/offers/offers.component";
import {EmployeesComponent} from "./employees/components/employees/employees.component";
import {SharedModule} from "../shared/shared.module";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {CarriersComponent} from "./carriers/components/carriers/carriers.component";
import {HotelsComponent} from "./hotels/components/hotels/hotels.component";
import {PromotionsComponent} from "./promotions/components/promotions.component";
import {CustomersComponent} from './customers/components/customers/customers.component';
import {CustomerDetailsComponent} from './customers/components/customer-details/customer-details.component';
import {LoyaltyProgramsComponent} from './loyalty-programs/components/loyalty-programs.component';
import {ReservationsComponent} from './reservations/components/reservations/reservations.component';


@NgModule({
  declarations: [
    HomeComponent,
    OffersComponent,
    EmployeesComponent,
    PromotionsComponent,
    HotelsComponent,
    CarriersComponent,
    LoyaltyProgramsComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbPaginationModule
  ]
})
export class ModulesModule {
}
