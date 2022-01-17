import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm} from "@angular/forms";
import {Question} from "../../services/dynamic-form.models";
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
      if (!question.abstractControl) {
        if (!question.options.formGroupName) {
          formControlMap[question.options.key] = new FormControl();
        }
        return;
      }
      formControlMap[question.options.key] = question.abstractControl;
      if (!(question.abstractControl instanceof FormControl)) {
        return;
      }
      if (this.insertData && this.insertData[question.options.key]) {
        formControlMap[question.options.key].setValue(this.insertData[question.options.key]);
      } else {
        formControlMap[question.options.key].setValue('')
      }
    });
    this.formGroup = new FormGroup(formControlMap);
  }

  onSubmit() {
    this.submittedResult.emit({...this.insertData, ...flattenObject(this.formGroup.getRawValue())});
  }

}
