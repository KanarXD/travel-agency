import {Component, OnInit} from '@angular/core';
import {OffersApiService} from "../../services/offers.api.service";
import {OfferKeys, OfferPrivileges} from "../../services/offers.models";
import {DataGridRowConfig, FieldType} from "../../../../shared/components/data-grid/data-grid.models";
import {ServerApiAction} from "../../../../shared/services/api.models";
import {AddOffersQuestionsService} from "../../services/add-offers.questions.service";
import {PagePrivileges} from "../../../../shared/components/page/services/page.models";
import {SearchOffersQuestionsService} from "../../services/search-offers.questions.service";
import {HotelsApiService} from "../../../hotels/services/hotels.api.service";
import {CarriersApiService} from "../../../carriers/services/carriers.api.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html'
})
export class OffersComponent implements OnInit {
  dataGridConfig!: DataGridRowConfig<OfferKeys>[];
  pagePrivileges!: PagePrivileges;

  constructor(
    public offersApiService: OffersApiService,
    public addOffersQuestionService: AddOffersQuestionsService,
    public searchOffersQuestionsService: SearchOffersQuestionsService,
    public hotelsApiService: HotelsApiService,
    public carriersApiService: CarriersApiService
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
      {key: 'basePrice', header: 'Base Price'},
      {key: 'startDate', header: 'Start Date'},
      {key: 'endDate', header: 'End Date'},
      {key: 'hotelId', header: 'Hotel', type: FieldType.REFERENCE, service: this.hotelsApiService},
      {key: 'carrierId', header: 'Carrier', type: FieldType.REFERENCE, service: this.carriersApiService},
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove, privilege: OfferPrivileges.DELETE}
    ];
  }

}
