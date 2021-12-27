import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {ItemAction} from "../../../../shared/utils/app.models";
import {OfferModel} from "../../../offers/services/offers.models";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
  itemAction$: Subject<ItemAction<OfferModel>> = new Subject();


  ngOnInit(): void {
  }

}
