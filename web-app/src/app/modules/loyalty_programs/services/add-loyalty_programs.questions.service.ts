import {Injectable} from '@angular/core';
import {
  Question,
  QuestionService,
  TextBoxQuestion
} from "../../../shared/components/dynamic-form/services/dynamic-form.models";
import {Observable, of} from "rxjs";
import {FormControl, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AddLoyaltyProgramsQuestionsService extends QuestionService {

  getQuestions(): Observable<Question[]> {
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
      new TextBoxQuestion({
        key: 'discount',
        label: 'Discount',
        type: 'number'
      }, new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9]+[0-9]*')
      ])),
      new TextBoxQuestion({
        key: 'threshold',
        label: 'Threshold',
        type: 'number'
      }, new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9]+[0-9]*')
      ]))
    ]);
  }

}
