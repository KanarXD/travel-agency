import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {ItemAction} from "../../utils/app.models";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Question} from "../dynamic-form/services/dynamic-form.models";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Input() itemAction$!: Subject<ItemAction<any>>;
  @Input() itemQuestionBase!: Question[];
  @Input() addItemButton!: string;

  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {
  }

  checkAndSend(itemForm: FormGroup) {

  }

  async open(content: TemplateRef<NgbModal>) {
    this.modalService.open(content).result.then(
      (result) => {
        console.log("closed");
        this.itemAction$.next({type: 'add', item: result});
      },
      (result) => {
        console.log('dismissed');
      }
    );
  }

}
