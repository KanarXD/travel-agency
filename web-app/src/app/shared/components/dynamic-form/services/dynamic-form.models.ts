import {FormControl} from "@angular/forms";
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
  options?: Option[];
}

export class Question {
  controlType: string;
  formControl: FormControl
  options: QuestionOptions;

  constructor(controlType: string, formControl: FormControl, options: QuestionOptions) {
    this.controlType = controlType;
    this.formControl = formControl;
    this.options = options;
  }
}

export class TextBoxQuestion extends Question {
  constructor(formControl: FormControl, options: QuestionOptions) {
    super('TextBox', formControl, options);
  }
}

export class DropdownQuestion extends Question {
  constructor(formControl: FormControl, options: QuestionOptions) {
    super('Dropdown', formControl, options);
  }
}

export class DateQuestion extends Question {
  constructor(formControl: FormControl, options: QuestionOptions) {
    super('Date', formControl, {...options, type: 'date'});
  }
}

export abstract class QuestionService {
  abstract getQuestions(): Observable<Question[]>;
}
