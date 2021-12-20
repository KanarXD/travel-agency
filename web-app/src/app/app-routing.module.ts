import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {OffersComponent} from "./modules/offers/components/offers/offers.component";
import {EmployeesComponent} from "./modules/employees/components/employees/employees.component";
import {OffersGuard} from "./modules/offers/services/offers.guard";
import {EmployeesGuard} from "./modules/employees/services/employees.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'offers', component: OffersComponent, canActivate: [OffersGuard]},
  {path: 'employees', component: EmployeesComponent, canActivate: [EmployeesGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
