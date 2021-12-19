import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataGridComponent} from "./components/data-grid/data-grid.component";
import {DataGridRowComponent} from "./components/data-grid/data-grid-row/data-grid-row.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DataGridComponent,
    DataGridRowComponent
  ],
  exports: [
    DataGridComponent,
    DataGridRowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
