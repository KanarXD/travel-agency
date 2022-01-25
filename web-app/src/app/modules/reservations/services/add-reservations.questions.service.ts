import {Injectable} from '@angular/core';
import {
  DropdownQuestion,
  Option,
  Question,
  QuestionService
} from "../../../shared/components/dynamic-form/services/dynamic-form.models";
import {forkJoin, map, Observable} from "rxjs";
import {CustomersApiService} from "../../customers/components/services/customers.api.service";
import {OffersApiService} from "../../offers/services/offers.api.service";
import {FormControl} from "@angular/forms";
import {FormValidators} from "../../../shared/utils/form-validators";

@Injectable({
  providedIn: 'root'
})
export class AddReservationsQuestionsService extends QuestionService {

  constructor(
    public customersApiService: CustomersApiService,
    public offersApiService: OffersApiService
  ) {
    super();
  }

  private static createQuestionList([customerOptionList, offerOptionList]: [Option[], Option[]]): Question[] {
    return [
      new DropdownQuestion(
        {
          key: 'customerId',
          label: 'Customer',
          options: customerOptionList
        }, new FormControl(null, [
          FormValidators.notNull
        ])),
      new DropdownQuestion(
        {
          key: 'offerId',
          label: 'Offer',
          options: offerOptionList
        }, new FormControl(null, [
          FormValidators.notNull
        ]))
    ];
  }

  override getQuestions(): Observable<Question[]> {
    return forkJoin([
      this.createItemOptionList$(this.customersApiService),
      this.createItemOptionList$(this.offersApiService, ['name', 'basePrice'])
    ]).pipe(
      map(AddReservationsQuestionsService.createQuestionList)
    );
  }
}
