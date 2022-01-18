import {Component, OnInit} from '@angular/core';
import {DataGridRowConfig, FieldType} from "../../../shared/components/data-grid/data-grid.models";
import {PagePrivileges} from "../../../shared/components/page/services/page.models";
import {PromotionKeys, PromotionPrivilege} from "../services/promotions.models";
import {ServerApiAction} from "../../../shared/services/api.models";
import {PromotionsApiService} from "../services/promotions.api.service";
import {AddPromotionsQuestionsService} from "../services/add-promotions.questions.service";
import {SearchPromotionsQuestionsService} from "../services/search-promotions.questions.service";

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html'
})
export class PromotionsComponent implements OnInit {
  dataGridConfig!: DataGridRowConfig<PromotionKeys>[];
  pagePrivileges!: PagePrivileges;

  constructor(
    public promotionsApiService: PromotionsApiService,
    public addPromotionsQuestionsService: AddPromotionsQuestionsService,
    public searchPromotionsQuestionsService: SearchPromotionsQuestionsService
  ) {
  }

  ngOnInit(): void {
    this.pagePrivileges = {
      read: PromotionPrivilege.READ,
      update: PromotionPrivilege.UPDATE,
      delete: PromotionPrivilege.DELETE
    };
    this.dataGridConfig = [
      {key: 'id'},
      {key: 'name'},
      {key: 'startDate', header: 'Start Date'},
      {key: 'endDate', header: 'End Date'},
      {key: 'discount', header: 'Discount'},
      {header: 'Edit', type: FieldType.BUTTON, action: ServerApiAction.Update, privilege: PromotionPrivilege.UPDATE},
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove, privilege: PromotionPrivilege.DELETE}
    ];
  }

}
