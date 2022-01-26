import {Injectable} from '@angular/core';
import {
  DropdownQuestion,
  Question,
  QuestionOption,
  QuestionService,
  TextBoxQuestion
} from "../../../shared/components/dynamic-form/services/dynamic-form.models";
import {forkJoin, map, Observable} from "rxjs";
import {FormControl, Validators} from "@angular/forms";
import {RolesApiService} from "../../roles/services/roles.api.service";
import {FormValidators} from "../../../shared/utils/form-validators";

@Injectable({
  providedIn: 'root'
})
export class AddEmployeesQuestionsService extends QuestionService {

  constructor(
    public rolesApiService: RolesApiService
  ) {
    super();
  }

  private static createQuestionList([roleOptionList]: [QuestionOption[]]): Question[] {
    return [
      new TextBoxQuestion({
        key: 'name',
        label: 'Name'
      }, new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ])),
      new TextBoxQuestion({
        key: 'surname',
        label: 'Surname'
      }, new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ])),
      new TextBoxQuestion({
        key: 'login',
        label: 'Login'
      }, new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ])),
      new TextBoxQuestion({
        key: 'password',
        label: 'Password'
      }, new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25)
      ])),
      new DropdownQuestion(
        {
          key: 'role',
          label: 'Role',
          options: roleOptionList
        }, new FormControl(null, [
          FormValidators.notNull
        ]))
    ];
  }

  getQuestions(): Observable<Question[]> {
    return forkJoin([
      this.createItemOptionList$(this.rolesApiService)
    ]).pipe(
      map(AddEmployeesQuestionsService.createQuestionList)
    )
  }
}
