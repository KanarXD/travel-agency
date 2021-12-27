import {Component, OnInit} from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {DataGridRowConfig} from "../../../../shared/components/data-grid/data-grid.models";
import {EmployeeKeys} from "../../services/employees.models";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
  dataGridConfig!: DataGridRowConfig<EmployeeKeys>[];

  constructor(
    private _employeesService: EmployeesService
  ) {
  }

  ngOnInit(): void {
    this.dataGridConfig = [
      {key: 'id'},
      {key: 'name'},
    ];
  }


  get employeesService(): EmployeesService {
    return this._employeesService;
  }
}
