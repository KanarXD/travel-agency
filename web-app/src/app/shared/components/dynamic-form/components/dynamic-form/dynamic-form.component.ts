import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Question} from "../../services/dynamic-form.models";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: Question[] = [];
  @Output() submittedResult: EventEmitter<any> = new EventEmitter<any>();

  formGroup!: FormGroup;
  payLoad = '';

  ngOnInit() {
    let formControlMap: { [key: string]: FormControl } = {};
    this.questions.forEach(question => {
      formControlMap[question.options.key] = question.formControl;
    });
    this.formGroup = new FormGroup(formControlMap);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.formGroup.getRawValue());
    this.submittedResult.emit(this.formGroup.getRawValue());
  }

}
