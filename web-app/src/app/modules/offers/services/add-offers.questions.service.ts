import {Injectable} from '@angular/core';
import {
  DateQuestion,
  DropdownQuestion,
  FormGroupQuestion,
  Option,
  Question,
  QuestionService,
  TextBoxQuestion,
} from "../../../shared/components/dynamic-form/services/dynamic-form.models";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {forkJoin, map, Observable} from "rxjs";
import {HotelsApiService} from "../../hotels/services/hotels.api.service";
import {CarriersApiService} from "../../carriers/services/carriers.api.service";
import {FormValidators} from "../../../shared/utils/form-validators";
import {PromotionsApiService} from "../../promotions/services/promotions.api.service";

@Injectable({
  providedIn: 'root'
})
export class AddOffersQuestionsService extends QuestionService {

  constructor(
    public promotionApiService: PromotionsApiService,
    public hotelsApiService: HotelsApiService,
    public carriersApiService: CarriersApiService
  ) {
    super();
  }

  override getQuestions(): Observable<Question[]> {
    return forkJoin([
      this.createItemOptionList$(this.promotionApiService),
      this.createItemOptionList$(this.hotelsApiService),
      this.createItemOptionList$(this.carriersApiService),
    ]).pipe(
      map(AddOffersQuestionsService.createQuestionList)
    );
  }

  private static createQuestionList([promotionOptionList, hotelOptionList, carrierOptionList]: [Option[], Option[], Option[]]): Question[] {
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
    return [
      new TextBoxQuestion({
        key: 'name',
        label: 'Name',
        type: 'text'
      }, new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])),
      new TextBoxQuestion({
        key: 'basePrice',
        label: 'Base price',
        type: 'number'
      }, new FormControl('', [
        Validators.required,
        Validators.pattern('(?!(^0+(\\.0+)?$))^\\d{1,6}(\\.\\d{1,2})?$')
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
      new DropdownQuestion(
        {
          key: 'promotionId',
          label: 'Promotion',
          options: promotionOptionList
        }),
      new DropdownQuestion(
        {
          key: 'hotelId',
          label: 'Hotel',
          options: hotelOptionList
        }),
      new DropdownQuestion(
        {
          key: 'carrierId',
          label: 'Carrier',
          options: carrierOptionList
        }),
      new FormGroupQuestion("datesFormGroup", datesFormGroup)
    ];
  }

}
