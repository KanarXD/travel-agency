import {Component, Input} from "@angular/core";
import {DataGridRowConfig} from "./data-grid.models";
import {Subject} from "rxjs";
import {ItemAction} from "../../utils/app.models";

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
