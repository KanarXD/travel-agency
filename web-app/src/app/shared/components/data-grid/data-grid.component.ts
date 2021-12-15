import {Component, Input} from "@angular/core";
import {ItemAction, DataGridRowConfig} from "./data-grid.models";
import {Subject} from "rxjs";

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['data-grid.component.scss']
})
export class DataGridComponent {
  @Input() data!: any[];
  @Input() config!: DataGridRowConfig<any>[];
  @Input() itemAction!: Subject<ItemAction<any>>;


}
