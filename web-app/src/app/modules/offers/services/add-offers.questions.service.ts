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


@Injectable({
  providedIn: 'root'
})
export class AddOffersQuestionsService extends QuestionService {

  constructor(
    public hotelsApiService: HotelsApiService
  ) {
    super();
  }

  override getQuestions(): Observable<Question[]> {
    return forkJoin([
      this.createHotelOptionList$()
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

  createQuestionList([hotelOptionList]: [Option[]]): Question[] {
    return [
      new TextBoxQuestion({
        key: 'name',
        label: 'Name',
        type: 'text'
      }, new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])),
      new TextBoxQuestion({
        key: 'basePrice',
        label: 'Base price',
        type: 'number'
      }, new FormControl(null, [
        Validators.required,
        Validators.pattern('[1-9]+[0-9]*')
      ])),
      new DateQuestion({
        key: 'startDate',
        label: 'Start date'
      }, new FormControl(null, [
        Validators.required
      ])),
      new DateQuestion({
        key: 'endDate',
        label: 'End date'
      }, new FormControl(null, [
        Validators.required
      ])),
      new DropdownQuestion(
        {
          key: 'hotelId',
          label: 'Hotel',
          options: hotelOptionList
        })
    ];
  }

}
