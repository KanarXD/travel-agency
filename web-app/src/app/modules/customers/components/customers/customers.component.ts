import {Component, OnInit} from '@angular/core';
import {PageComponentPattern} from "../../../../shared/components/page/services/page.models";
import {CustomerKeys, CustomersPrivilege} from "../services/customers.models";
import {CustomersApiService} from "../services/customers.api.service";
import {LoyaltyProgramsApiService} from "../../../loyalty-programs/services/loyalty-programs.api.service";
import {FieldType} from "../../../../shared/components/data-grid/data-grid.models";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent extends PageComponentPattern<CustomerKeys> implements OnInit {

  constructor(
    public customersApiService: CustomersApiService,
    public loyaltyProgramsApiService: LoyaltyProgramsApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.pagePrivileges = {
      read: CustomersPrivilege.READ,
      update: CustomersPrivilege.UPDATE,
      delete: CustomersPrivilege.DELETE
    };
    this.dataGridConfig = [
      {key: 'name'},
      {key: 'surname'},
      {
        key: 'loyaltyProgramId',
        header: 'loyalty program',
        type: FieldType.REFERENCE,
        service: this.loyaltyProgramsApiService
      },
    ];
  }

}
