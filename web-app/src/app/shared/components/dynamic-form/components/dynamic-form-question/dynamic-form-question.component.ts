import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Question} from "../../services/dynamic-form.models";

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {

  @Input() question!: Question;
  @Input() formGroup!: FormGroup;

  get isValid() {
    return this.formGroup.controls[this.question.options.key].valid;
  }

  get formControl() {
    return this.formGroup.get(this.question.options.key);
  }
}
