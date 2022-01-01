import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataGridComponent} from "./components/data-grid/data-grid.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddItemComponent} from './components/add-item/add-item.component';
import {DataGridRowComponent} from "./components/data-grid/data-grid-row/data-grid-row.component";
import {
  DynamicFormQuestionComponent
} from "./components/dynamic-form/components/dynamic-form-question/dynamic-form-question.component";
import {DynamicFormComponent} from "./components/dynamic-form/components/dynamic-form/dynamic-form.component";
import {
  DynamicFormErrorsComponent
} from './components/dynamic-form/components/dynamic-form-errors/dynamic-form-errors.component';
import {PageComponent} from './components/page/components/page/page.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {SearchComponent} from './components/search/search.component';

@NgModule({
  declarations: [
    DataGridComponent,
    DataGridRowComponent,
    AddItemComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    DynamicFormErrorsComponent,
    PageComponent,
    SearchComponent
  ],
  exports: [
    DataGridComponent,
    DynamicFormComponent,
    AddItemComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class SharedModule {
}
