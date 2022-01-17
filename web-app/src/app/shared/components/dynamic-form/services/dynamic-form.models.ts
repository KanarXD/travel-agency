import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

export interface Option {
  key: string | number;
  value: string;
}

export interface QuestionOptions {
  initValue?: string;
  key: string;
  label: string;
  type?: string;
  formGroupName?: string;
  options?: Option[];
}

export class Question {
  controlType: string;
  options: QuestionOptions;
  abstractControl?: AbstractControl;

  constructor(controlType: string, options: QuestionOptions, abstractControl?: AbstractControl) {
    this.abstractControl = abstractControl;
    this.controlType = controlType;
    this.options = options;
  }
}

export class FormGroupQuestion extends Question {
  constructor(key: string, formGroup: FormGroup) {
    super('formGroup', {key: key, label: ''}, formGroup);
  }
}

export class TextBoxQuestion extends Question {
  constructor(options: QuestionOptions, formControl?: FormControl) {
    super('TextBox', options, formControl);
  }
}

export class DropdownQuestion extends Question {
  constructor(options: QuestionOptions, formControl?: FormControl) {
    super('Dropdown', options, formControl);
  }
}

export class DateQuestion extends Question {
  constructor(options: QuestionOptions, formControl?: FormControl) {
    super('Date', {...options, type: 'date'}, formControl);
  }
}

export abstract class QuestionService {
  abstract getQuestions(): Observable<Question[]>;
}
