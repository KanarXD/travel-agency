import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {OffersComponent} from "./modules/offers/components/offers/offers.component";
import {EmployeesComponent} from "./modules/employees/components/employees/employees.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
