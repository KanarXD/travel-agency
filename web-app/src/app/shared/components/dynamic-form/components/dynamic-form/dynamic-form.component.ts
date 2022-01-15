import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {Question} from "../../services/dynamic-form.models";

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
    let formControlMap: { [key: string]: FormControl } = {};
    this.questions.forEach(question => {
      if (!question.formControl) {
        question.formControl = new FormControl();
      }
      formControlMap[question.options.key] = question.formControl;
      if (this.insertData && this.insertData[question.options.key]) {
        formControlMap[question.options.key].setValue(this.insertData[question.options.key]);
      } else {
        formControlMap[question.options.key].setValue('')
      }
    });
    this.formGroup = new FormGroup(formControlMap);
  }

  onSubmit() {
    this.submittedResult.emit({...this.insertData, ...this.formGroup.getRawValue()});
  }

}
