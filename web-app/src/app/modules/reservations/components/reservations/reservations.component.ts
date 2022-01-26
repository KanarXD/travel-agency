import {Component, OnInit} from '@angular/core';
import {PageComponentPattern} from "../../../../shared/components/page/services/page.models";
import {ReservationKeys, ReservationsPrivilege} from "../../services/reservations.models";
import {ReservationsApiService} from "../../services/reservations.api.service";
import {AddReservationsQuestionsService} from "../../services/add-reservations.questions.service";
import {OffersApiService} from "../../../offers/services/offers.api.service";
import {CustomersApiService} from "../../../customers/components/services/customers.api.service";
import {FieldType} from "../../../../shared/components/data-grid/data-grid.models";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html'
})
export class ReservationsComponent extends PageComponentPattern<ReservationKeys> implements OnInit {

  constructor(
    public reservationsApiService: ReservationsApiService,
    public addReservationsQuestionsService: AddReservationsQuestionsService,
    public offersApiService: OffersApiService,
    public customersApiService: CustomersApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.pagePrivileges = {
      read: ReservationsPrivilege.READ,
      update: ReservationsPrivilege.UPDATE,
      delete: ReservationsPrivilege.DELETE
    };
    this.dataGridConfig = [
      {key: 'offerId', header: 'offer', type: FieldType.REFERENCE, service: this.offersApiService},
      {key: 'customerId', header: 'customer', type: FieldType.REFERENCE, service: this.customersApiService},
      {key: 'reservationTimestamp', header: 'date and time'},
      {key: 'price'},
    ];
  }

}
