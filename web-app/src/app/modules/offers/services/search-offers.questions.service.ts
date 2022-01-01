import {Injectable} from '@angular/core';
import {
  Question,
  QuestionService,
  TextBoxQuestion
} from "../../../shared/components/dynamic-form/services/dynamic-form.models";
import {Observable, of} from "rxjs";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SearchOffersQuestionsService extends QuestionService {

  getQuestions(): Observable<Question[]> {
    return of([
      new TextBoxQuestion(
        new FormControl(), {
          key: 'name',
          label: 'Name'
        }),
      new TextBoxQuestion(
        new FormControl(), {
          key: 'basePrice',
          label: 'Base price'
        }),
    ]);
  }

}
