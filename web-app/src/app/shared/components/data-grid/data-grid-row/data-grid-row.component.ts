import {Component, Input} from "@angular/core";
import {DataGridRowConfig} from "../data-grid.models";
import {Subject} from "rxjs";
import {HttpMethodName} from "../../../services/api.models";
import {ItemAction} from "../../../utils/app.models";

@Component({
  selector: '[app-data-grid-row]',
  templateUrl: './data-grid-row.component.html'
})
export class DataGridRowComponent {
  @Input() data!: { [s: string]: string };
  @Input() config!: DataGridRowConfig<any>[];
  @Input() itemAction!: Subject<ItemAction<any>>;

  onAction(type: HttpMethodName | undefined, item: any) {
    if (!!type) {
      this.itemAction.next({type, item});
    }
  }

}
