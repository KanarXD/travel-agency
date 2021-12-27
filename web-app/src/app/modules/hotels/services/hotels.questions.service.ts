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
export class HotelsQuestionsService extends QuestionService {

  getQuestions(): Observable<Question[]> {
    let questions: Question[] = [
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
          Validators.minLength(5)
        ]), {
          key: 'location',
          label: 'Location'
        })
    ];

    return of(questions);
  }

}
