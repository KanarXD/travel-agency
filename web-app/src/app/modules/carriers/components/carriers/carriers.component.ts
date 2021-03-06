import {Component, OnInit} from '@angular/core';
import {DataGridRowConfig, FieldType} from "../../../../shared/components/data-grid/data-grid.models";
import {PagePrivileges} from "../../../../shared/components/page/services/page.models";
import {CarrierKeys, OfferPrivilege} from "../../services/carriers.models";
import {ServerApiAction} from "../../../../shared/services/api.models";
import {CarriersApiService} from "../../services/carriers.api.service";
import {AddCarriersQuestionsService} from "../../services/add-carriers.questions.service";
import {SearchCarriersQuestionsService} from "../../services/search-carriers.questions.service";

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html'
})
export class CarriersComponent implements OnInit {
  dataGridConfig!: DataGridRowConfig<CarrierKeys>[];
  pagePrivileges!: PagePrivileges;

  constructor(
    public carriersApiService: CarriersApiService,
    public addCarriersQuestionsService: AddCarriersQuestionsService,
    public searchCarriersQuestionsService: SearchCarriersQuestionsService
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
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove, privilege: OfferPrivilege.DELETE}
    ];
  }

}
