import {Component, OnInit} from '@angular/core';
import {DataGridRowConfig, FieldType} from "../../../../shared/components/data-grid/data-grid.models";
import {HotelKeys, OfferPrivileges} from "../../services/hotels.models";
import {HotelsApiService} from "../../services/hotels.api.service";
import {HotelsQuestionsService} from "../../services/hotels.questions.service";
import {ServerApiAction} from "../../../../shared/services/api.models";
import {PagePrivileges} from "../../../../shared/components/page/services/page.models";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html'
})
export class HotelsComponent implements OnInit {
  dataGridConfig!: DataGridRowConfig<HotelKeys>[];
  pagePrivileges!: PagePrivileges;

  constructor(
    public hotelsApiService: HotelsApiService,
    public hotelsQuestionsService: HotelsQuestionsService
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
      {key: 'location'},
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove, privilege: OfferPrivileges.DELETE}
    ];
  }

}
