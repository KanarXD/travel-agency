// export class QuestionBase<T> {
//   value: T | undefined;
//   key: string;
//   label: string;
//   required: boolean;
//   order: number;
//   controlType: string;
//   type: string;
//   options: { key: string, value: string }[];
//
//   constructor(options: {
//     value?: T;
//     key?: string;
//     label?: string;
//     required?: boolean;
//     order?: number;
//     controlType?: string;
//     type?: string;
//     options?: { key: string, value: string }[];
//   } = {}) {
//     this.value = options.value;
//     this.key = options.key || '';
//     this.label = options.label || '';
//     this.required = !!options.required;
//     this.order = options.order === undefined ? 1 : options.order;
//     this.controlType = options.controlType || '';
//     this.type = options.type || '';
//     this.options = options.options || [];
//   }
// }
//
// export class TextboxQuestion extends QuestionBase<string> {
//   override controlType = 'textbox';
// }
//
//
// export class DropdownQuestion extends QuestionBase<string> {
//   override controlType = 'dropdown';
// }

import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export interface QuestionOptions {
  initValue?: string;
  key: string;
  label: string;
  type?: string;
  options?: { key: string, value: string }[];
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
