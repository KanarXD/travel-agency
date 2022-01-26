import {Injectable} from '@angular/core';
import {
  DateQuestion,
  FormGroupQuestion,
  Question,
  QuestionService,
  TextBoxQuestion
} from "../../../shared/components/dynamic-form/services/dynamic-form.models";
import {Observable, of} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "../../../shared/utils/form-validators";

@Injectable({
  providedIn: 'root'
})
export class AddPromotionsQuestionsService extends QuestionService {

  getQuestions(): Observable<Question[]> {
    const datesFormGroup: FormGroup = new FormGroup({
      startDate: new FormControl('', [
        Validators.required,
        FormValidators.futureDate
      ]),
      endDate: new FormControl('', [
        Validators.required,
        FormValidators.futureDate
      ])
    }, [
      FormValidators.dateAfterDate
    ]);
    return of([
      new TextBoxQuestion({
        key: 'name',
        label: 'Name',
        type: 'text'
      }, new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])),
      new DateQuestion({
        key: 'startDate',
        label: 'Start date',
        formGroupName: 'datesFormGroup'
      }),
      new DateQuestion({
        key: 'endDate',
        label: 'End date',
        formGroupName: 'datesFormGroup'
      }),
      new TextBoxQuestion({
        key: 'discount',
        label: 'Discount',
        type: 'number'
      }, new FormControl('', [
        Validators.required,
        Validators.max(99),
        Validators.pattern('[1-9]+[0-9]*')
      ])),
      new FormGroupQuestion("datesFormGroup", datesFormGroup)
    ]);
  }

}
