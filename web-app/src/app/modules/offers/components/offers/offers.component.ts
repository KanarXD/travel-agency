import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OffersApiService} from "../../services/offers.api.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {OfferFilters, OfferKeys, OfferModel} from "../../services/offers.models";
import {DataGridRowConfig, FieldType} from "../../../../shared/components/data-grid/data-grid.models";
import {ResponseData, ServerApiAction} from "../../../../shared/services/api.models";
import {CoreService} from "../../../../shared/services/core.service";
import {ItemAction} from "../../../../shared/utils/app.models";
import {OffersQuestionsService} from "../../services/offers.questions.service";
import {Question} from "../../../../shared/components/dynamic-form/services/dynamic-form.models";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html'
})
export class OffersComponent implements OnInit, AfterViewInit {
  filters$: BehaviorSubject<OfferFilters> = new BehaviorSubject(new OfferFilters());
  offers$!: Observable<ResponseData<OfferModel>>;
  dataGridConfig!: DataGridRowConfig<OfferKeys>[];
  questions$: Observable<Question[]>;
  itemAction$: Subject<ItemAction<OfferModel>> = new Subject();

  constructor(
    private offersApiService: OffersApiService,
    private coreService: CoreService,
    private offersQuestionService: OffersQuestionsService
  ) {
    this.questions$ = offersQuestionService.getQuestions();
  }

  ngOnInit(): void {
    this.dataGridConfig = [
      {key: 'id'},
      {key: 'name'},
      {key: 'basePrice'},
      {key: 'startDate'},
      {key: 'endDate'},
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove},
    ];
  }

  ngAfterViewInit(): void {
    this.filters$.subscribe(_ => this.fetch())
    this.itemAction$.subscribe((itemAction: ItemAction<OfferModel>) => {
      switch (itemAction.type) {
        case "remove":
          this.offersApiService.remove(itemAction.item.id).subscribe(_ => this.fetch());
          break;
        case "add":
          let offer: any = itemAction.item;
          console.log('add item');
          console.log(offer);
          break;
      }
    });
  }

  updateFilters(param: { currentPage: number }) {
    this.filters$.next({...this.filters$.value, ...param});
  }

  fetch() {
    this.coreService.userStatus$.subscribe(({isLogged}) => {
      if (isLogged) {
        this.offers$ = this.offersApiService.fetch(this.filters$.value)
      }
    });
  }

}
