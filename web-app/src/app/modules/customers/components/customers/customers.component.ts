import {Component, OnInit} from '@angular/core';
import {PageComponentPattern} from "../../../../shared/components/page/services/page.models";
import {CustomerKeys, CustomersPrivilege} from "../services/customers.models";
import {CustomersApiService} from "../services/customers.api.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent extends PageComponentPattern<CustomerKeys> implements OnInit {

  constructor(
    public customersApiService: CustomersApiService
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
      {key: 'loyaltyProgramId'},
    ];
  }

}
