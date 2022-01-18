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
import {HotelModel} from "../../hotels/services/hotels.models";
import {ResponseData} from "../../../shared/services/api.models";
import {CarrierModel} from "../../carriers/services/carriers.models";
import {CarriersApiService} from "../../carriers/services/carriers.api.service";
import {FormValidators} from "../../../shared/utils/form-validators";
import {PromotionsApiService} from "../../promotions/services/promotions.api.service";
import {PromotionModel} from "../../promotions/services/promotions.models";

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
      this.createPromotionOptionList$(),
      this.createHotelOptionList$(),
      this.createCarrierOptionList$()
    ]).pipe(
      map(this.createQuestionList)
    );
  }

  createHotelOptionList$(): Observable<Option[]> {
    return this.hotelsApiService.fetch()
      .pipe(
        map((response: ResponseData<HotelModel>) => {
            let hotelList: HotelModel[] = response.data;
            let hotelOptionList: Option[] = [];
            hotelList.forEach(hotel => {
              hotelOptionList.push({key: hotel.id, value: hotel.name});
            })
            return hotelOptionList;
          }
        ));
  }

  createCarrierOptionList$(): Observable<Option[]> {
    return this.carriersApiService.fetch()
      .pipe(
        map((response: ResponseData<CarrierModel>) => {
            let carrierList: CarrierModel[] = response.data;
            let carrierOptionList: Option[] = [];
            carrierList.forEach(carrier => {
              carrierOptionList.push({key: carrier.id, value: carrier.name});
            })
            return carrierOptionList;
          }
        ));
  }

  createPromotionOptionList$(): Observable<Option[]> {
    return this.promotionApiService.fetch()
      .pipe(
        map((response: ResponseData<CarrierModel>) => {
            let promotionList: PromotionModel[] = response.data;
            let carrierOptionList: Option[] = [];
          promotionList.forEach(promotion => {
              carrierOptionList.push({key: promotion.id, value: promotion.name});
            })
            return carrierOptionList;
          }
        ));
  }

  createQuestionList([promotionOptionList, hotelOptionList, carrierOptionList]: [Option[], Option[], Option[]]): Question[] {
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
        Validators.pattern('[1-9]+[0-9]*')
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
