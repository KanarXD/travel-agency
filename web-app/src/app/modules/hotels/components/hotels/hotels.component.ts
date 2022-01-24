import {Component, OnInit} from '@angular/core';
import {DataGridRowConfig, FieldType} from "../../../../shared/components/data-grid/data-grid.models";
import {HotelKeys, OfferPrivilege} from "../../services/hotels.models";
import {HotelsApiService} from "../../services/hotels.api.service";
import {AddHotelsQuestionsService} from "../../services/add-hotels.questions.service";
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
    public addHotelsQuestionsService: AddHotelsQuestionsService
  ) {
  }

  ngOnInit(): void {
    this.pagePrivileges = {
      read: OfferPrivilege.READ,
      update: OfferPrivilege.UPDATE,
      delete: OfferPrivilege.DELETE
    };
    this.dataGridConfig = [
      {key: 'name'},
      {key: 'location'},
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove, privilege: OfferPrivilege.DELETE}
    ];
  }

}
