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
export class OffersQuestionsService extends QuestionService {

  constructor(
    private hotelsApiService: HotelsApiService
  ) {
    super();
    console.log("OffersQuestionsService created")
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
            console.log('hotelOptionList created')
            return hotelOptionList;
          }
        ));
  }

  createQuestionList([hotelOptionList]: [Option[]]) {
    let questionList: Question[] = [
      new TextBoxQuestion(
        new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25)
        ]), {
          key: 'name',
          label: 'Name',
          type: 'text'
        }),
      new TextBoxQuestion(
        new FormControl(null, [
          Validators.required,
          Validators.pattern('[1-9]+[0-9]*')
        ]), {
          key: 'basePrice',
          label: 'Base price'
        }),
      new DateQuestion(
        new FormControl(null, [
          Validators.required
        ]), {
          key: 'startDate',
          label: 'Start date'
        }),
      new DateQuestion(
        new FormControl(null, [
          Validators.required
        ]), {
          key: 'endDate',
          label: 'End date'
        }),
      new DropdownQuestion(
        new FormControl(null), {
          key: 'hotel',
          label: 'Hotel',
          options: hotelOptionList
        })
    ];
    console.log('questions created');
    return questionList;
  }

}
