import {Component, OnInit} from '@angular/core';
import {DataGridRowConfig, FieldType} from "../../../shared/components/data-grid/data-grid.models";
import {PagePrivileges} from "../../../shared/components/page/services/page.models";
import {LoyaltyProgramKeys, LoyaltyProgramPrivilege} from "../services/loyalty_programs.models";
import {ServerApiAction} from "../../../shared/services/api.models";
import {LoyaltyProgramsApiService} from "../services/loyalty_programs.api.service";
import {AddLoyaltyProgramsQuestionsService} from "../services/add-loyalty_programs.questions.service";
import {SearchLoyaltyProgramsQuestionsService} from "../services/search-loyalty_programs.questions.service";

@Component({
  selector: 'app-loyalty_program',
  templateUrl: './loyalty_programs.component.html'
})
export class LoyaltyProgramsComponent implements OnInit {
  dataGridConfig!: DataGridRowConfig<LoyaltyProgramKeys>[];
  pagePrivileges!: PagePrivileges;

  constructor(
    public loyaltyProgramsApiService: LoyaltyProgramsApiService,
    public addLoyaltyProgramsQuestionsService: AddLoyaltyProgramsQuestionsService,
    public searchLoyaltyProgramsQuestionsService: SearchLoyaltyProgramsQuestionsService
  ) {
  }

  ngOnInit(): void {
    this.pagePrivileges = {
      read: LoyaltyProgramPrivilege.READ,
      update: LoyaltyProgramPrivilege.UPDATE,
      delete: LoyaltyProgramPrivilege.DELETE
    };
    this.dataGridConfig = [
      {key: 'name'},
      {key: 'discount', header: 'Discount'},
      {key: 'threshold', header: 'Threshold'},
      {header: 'Edit', type: FieldType.BUTTON, action: ServerApiAction.Update, privilege: LoyaltyProgramPrivilege.UPDATE},
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove, privilege: LoyaltyProgramPrivilege.DELETE}
    ];
  }

}
