import {Component, Input} from "@angular/core";
import {DataGridRowConfig} from "../data-grid-config";
import {Subject} from "rxjs";

@Component({
  selector: '[app-data-grid-row]',
  templateUrl: './data-grid-row.component.html'
})
export class DataGridRowComponent {
  @Input() data!: { [s: string]: string };
  @Input() config!: DataGridRowConfig<any>[];
  @Input() itemAction!: Subject<any>;

  onAction(type: string | undefined, data: { [s: string]: any }) {
    this.itemAction.next({type, data});
  }
}
