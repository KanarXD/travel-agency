import {Injectable} from '@angular/core';
import {
  DateQuestion,
  DropdownQuestion,
  Option,
  Question,
  QuestionService,
  TextBoxQuestion,
} from "../../../shared/components/dynamic-form/services/dynamic-form.models";
import {FormControl, Validators} from "@angular/forms";
import {forkJoin, map, Observable} from "rxjs";
import {HotelsApiService} from "../../hotels/services/hotels.api.service";
import {HotelModel} from "../../hotels/services/hotels.models";
import {ResponseData} from "../../../shared/services/api.models";
import {CarrierModel} from "../../carriers/services/carriers.models";
import {CarriersApiService} from "../../carriers/services/carriers.api.service";
import {FormValidators} from "../../../shared/utils/form-validators";

@Injectable({
  providedIn: 'root'
})
export class AddOffersQuestionsService extends QuestionService {

  constructor(
    public hotelsApiService: HotelsApiService,
    public carriersApiService: CarriersApiService
  ) {
    super();
  }

  override getQuestions(): Observable<Question[]> {
    return forkJoin([
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

  createQuestionList([hotelOptionList, carrierOptionList]: [Option[], Option[]]): Question[] {
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
        label: 'Start date'
      }, new FormControl('', [
        Validators.required,
        FormValidators.futureDate
      ])),
      new DateQuestion({
        key: 'endDate',
        label: 'End date'
      }, new FormControl('', [
        Validators.required,
        FormValidators.futureDate
      ])),
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
        })
    ];
  }

}
