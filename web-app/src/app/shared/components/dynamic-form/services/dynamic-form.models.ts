import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {map, Observable} from "rxjs";
import {ResponseData} from "../../../services/api.models";
import {ServerApiService} from "../../../services/server.api.service";
import {Item} from "../../page/services/page.models";

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

  protected createItemOptionList$<T extends Item>(serverApiService: ServerApiService<T>, valueAttributes?: string[]): Observable<Option[]> {
    return serverApiService.fetch()
      .pipe(
        map((response: ResponseData<T>) => {
            let itemOptionList: Option[] = [];
            response.data.forEach((item: T) => {
              let value: string = valueAttributes ? valueAttributes
                  .flatMap((value: string) => item[value]).join(', ') :
                item.name;
              itemOptionList.push({key: item.id, value: value});
            })
            return itemOptionList;
          }
        ));
  }
}
