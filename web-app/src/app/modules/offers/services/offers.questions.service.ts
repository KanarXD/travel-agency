import {Injectable} from '@angular/core';
import {
  DateQuestion,
  Question,
  QuestionService,
  TextBoxQuestion,
} from "../../../shared/components/dynamic-form/services/dynamic-form.models";
import {FormControl, Validators} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class OffersQuestionsService implements QuestionService {

  getQuestions(): Question[] {
    return [
      new TextBoxQuestion(
        new FormControl(null, [
          Validators.required,
          Validators.minLength(3)
        ]), {
          key: 'name',
          label: 'Name',
          type: 'text'
        }),
      new TextBoxQuestion(
        new FormControl(null, [
          Validators.required,
          Validators.pattern('[1-9]+[0-9]*')
        ]), {
          key: 'basePrice',
          label: 'Base price'
        }),
      new DateQuestion(
        new FormControl(null, [
          Validators.required
        ]), {
          key: 'startDate',
          label: 'Start date'
        }),
      new DateQuestion(
        new FormControl(null, [
          Validators.required
        ]), {
          key: 'endDate',
          label: 'End date'
        })
    ];
  }

}
