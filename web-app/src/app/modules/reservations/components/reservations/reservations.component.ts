import {Component, OnInit} from '@angular/core';
import {PageComponentPattern} from "../../../../shared/components/page/services/page.models";
import {ReservationKeys, ReservationsPrivilege} from "../../services/reservations.models";
import {ReservationsApiService} from "../../services/reservations.api.service";
import {AddReservationsQuestionsService} from "../../services/add-reservations.questions.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html'
})
export class ReservationsComponent extends PageComponentPattern<ReservationKeys> implements OnInit {

  constructor(
    public reservationsApiService: ReservationsApiService,
    public addReservationsQuestionsService: AddReservationsQuestionsService
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
      {key: 'offerId'},
      {key: 'customerId'},
      {key: 'reservationTimestamp'},
    ];
  }

}
