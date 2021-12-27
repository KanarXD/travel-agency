import {Component, Input, TemplateRef} from '@angular/core';
import {Subject} from "rxjs";
import {ItemAction} from "../../utils/app.models";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Question} from "../dynamic-form/services/dynamic-form.models";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html'
})
export class AddItemComponent {
  @Input() itemAction$!: Subject<ItemAction<any>>;
  @Input() itemQuestionBase!: Question[];
  @Input() title!: string;

  constructor(private modalService: NgbModal) {
  }

  async open(content: TemplateRef<NgbModal>) {
    this.modalService.open(content).result.then(
      (result) => {
        console.log("closed");
        this.itemAction$.next({type: 'add', item: result});
      },
      _ => {
        console.log('dismissed');
      }
    );
  }

}
