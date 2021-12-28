import {Component, OnInit} from '@angular/core';
import {OffersApiService} from "../../services/offers.api.service";
import {OfferKeys} from "../../services/offers.models";
import {DataGridRowConfig, FieldType} from "../../../../shared/components/data-grid/data-grid.models";
import {ServerApiAction} from "../../../../shared/services/api.models";
import {OffersQuestionsService} from "../../services/offers.questions.service";
import {PagePrivileges} from "../../../../shared/components/page/services/page.models";
import {OfferPrivileges} from "../../../hotels/services/hotels.models";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html'
})
export class OffersComponent implements OnInit {
  dataGridConfig!: DataGridRowConfig<OfferKeys>[];
  pagePrivileges!: PagePrivileges;

  constructor(
    public offersApiService: OffersApiService,
    public offersQuestionService: OffersQuestionsService
  ) {
  }

  ngOnInit(): void {
    this.pagePrivileges = {
      read: OfferPrivileges.READ,
      update: OfferPrivileges.UPDATE,
      delete: OfferPrivileges.DELETE
    };
    this.dataGridConfig = [
      {key: 'id'},
      {key: 'name'},
      {key: 'basePrice'},
      {key: 'startDate'},
      {key: 'endDate'},
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove}
    ];
  }

}
