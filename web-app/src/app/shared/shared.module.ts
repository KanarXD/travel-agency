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

@NgModule({
  declarations: [
    DataGridComponent,
    DataGridRowComponent,
    AddItemComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ],
  exports: [
    DataGridComponent,
    DynamicFormComponent,
    AddItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
