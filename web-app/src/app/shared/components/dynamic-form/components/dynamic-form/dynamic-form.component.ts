import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm} from "@angular/forms";
import {FormGroupQuestion, Question} from "../../services/dynamic-form.models";
import {flattenObject} from "../../../../utils/functions";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Question[] = [];
  @Input() insertData!: { [key: string]: string };
  @Input() submitButton!: string;
  @Output() submittedResult: EventEmitter<any> = new EventEmitter<any>();
  @Output() @ViewChild('ngForm') ngForm!: NgForm;
  formGroup!: FormGroup;

  ngOnInit() {
    let formControlMap: { [key: string]: AbstractControl } = {};
    this.questions.forEach(question => {
      let formControl: AbstractControl | null | undefined;
      if (!question.abstractControl) {
        if (!question.options.formGroupName) {
          formControl = new FormControl();
          formControlMap[question.options.key] = formControl;
        } else {
          const formGroupQuestion: FormGroupQuestion | undefined = this.questions
            .find((foundQuestion: Question) =>
              foundQuestion.controlType === 'formGroup' &&
              foundQuestion.options.key == question.options.formGroupName) as FormGroupQuestion;
          formControl = formGroupQuestion?.abstractControl?.get(question?.options?.key);
        }
      } else {
        formControl = question.abstractControl;
        formControlMap[question.options.key] = formControl;
      }
      if (!(formControl instanceof FormControl)) {
        return;
      }
      if (this.insertData && this.insertData[question.options.key]) {
        formControl.setValue(this.insertData[question.options.key]);
      }
    });
    this.formGroup = new FormGroup(formControlMap);
  }

  onSubmit() {
    this.submittedResult.emit({...this.insertData, ...flattenObject(this.formGroup.getRawValue())});
  }

}
