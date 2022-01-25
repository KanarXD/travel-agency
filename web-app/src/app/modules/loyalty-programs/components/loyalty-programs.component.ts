import {Component, OnInit} from '@angular/core';
import {PageComponentPattern} from "../../../shared/components/page/services/page.models";
import {LoyaltyProgramKeys, LoyaltyProgramPrivilege} from "../services/loyalty-programs.models";
import {LoyaltyProgramsApiService} from "../services/loyalty-programs.api.service";
import {SearchLoyaltyProgramsQuestionsService} from "../services/search-loyalty-programs.questions.service";

@Component({
  selector: 'app-loyalty_program',
  templateUrl: './loyalty-programs.component.html'
})
export class LoyaltyProgramsComponent extends PageComponentPattern<LoyaltyProgramKeys> implements OnInit {

  constructor(
    public loyaltyProgramsApiService: LoyaltyProgramsApiService,
    public searchLoyaltyProgramsQuestionsService: SearchLoyaltyProgramsQuestionsService
  ) {
    super();
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
      {key: 'threshold', header: 'Threshold'}
    ];
  }

}
