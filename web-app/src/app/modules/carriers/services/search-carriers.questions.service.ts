import {Injectable} from '@angular/core';
import {
  Question,
  QuestionService,
  TextBoxQuestion
} from "../../../shared/components/dynamic-form/services/dynamic-form.models";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchCarriersQuestionsService extends QuestionService {

  getQuestions(): Observable<Question[]> {
    return of([
      new TextBoxQuestion({
        key: 'name',
        label: 'Name'
      }),
    ]);
  }

}
