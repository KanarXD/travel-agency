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
export class AddCarriersQuestionsService extends QuestionService {

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
    ]);
  }

}
