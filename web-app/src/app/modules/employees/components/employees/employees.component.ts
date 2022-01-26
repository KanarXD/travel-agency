import {Component, OnInit} from '@angular/core';
import {FieldType} from "../../../../shared/components/data-grid/data-grid.models";
import {PageComponentPattern} from "../../../../shared/components/page/services/page.models";
import {EmployeeKeys, EmployeePrivilege} from "../../services/employees.models";
import {SearchEmployeesQuestionService} from "../../services/search-employees.questions.service";
import {EmployeesApiService} from "../../services/employees.api.service";
import {ServerApiAction} from "../../../../shared/services/api.models";
import {OfferPrivilege} from "../../../offers/services/offers.models";
import {RolesApiService} from "../../../roles/services/roles.api.service";
import {AddEmployeesQuestionsService} from "../../services/add-employees.questions.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent extends PageComponentPattern<EmployeeKeys> implements OnInit {

  constructor(
    public employeesService: EmployeesApiService,
    public addEmployeesQuestionsService: AddEmployeesQuestionsService,
    public searchEmployeesQuestionService: SearchEmployeesQuestionService,
    public rolesApiService: RolesApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.pagePrivileges = {
      read: EmployeePrivilege.READ,
      update: EmployeePrivilege.UPDATE,
      delete: EmployeePrivilege.DELETE
    };
    this.dataGridConfig = [
      {key: 'name'},
      {key: 'surname'},
      {key: 'employmentDate'},
      {key: 'login'},
      {key: 'role', header: 'Role', type: FieldType.REFERENCE, service: this.rolesApiService},
      {header: 'Edit', type: FieldType.BUTTON, action: ServerApiAction.Update, privilege: OfferPrivilege.UPDATE},
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove, privilege: OfferPrivilege.DELETE}
    ];
  }

}
