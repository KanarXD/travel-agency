import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {OffersComponent} from "./offers/components/offers/offers.component";
import {EmployeesComponent} from "./employees/components/employees/employees.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent,
    OffersComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ContainersModule {
}
