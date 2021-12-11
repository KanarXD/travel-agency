import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OffersApiService} from "../../services/offers.api.service";
import {BehaviorSubject, debounceTime, Observable, Subject} from "rxjs";
import {OfferFilters, OfferKeys, OfferModel} from "../../services/offers.models";
import {DataGridRowConfig, FieldType, ItemAction} from "../../../../shared/components/data-grid/data-grid.models";
import {ResponseData} from "../../../../shared/services/api.models";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit, AfterViewInit {
  filters$: BehaviorSubject<OfferFilters> = new BehaviorSubject(new OfferFilters());
  offers$: Observable<ResponseData<OfferModel>> = this.offersApiService.fetch(this.filters$.value);
  dataGridConfig!: DataGridRowConfig<OfferKeys>[];
  itemAction$: Subject<ItemAction<OfferModel>> = new Subject();


  constructor(private offersApiService: OffersApiService) {
  }

  ngOnInit(): void {
    this.dataGridConfig = [
      {key: 'id'},
      {key: 'name'},
      {key: 'basePrice'},
      {key: 'startDate'},
      {key: 'endDate'},
      {header: 'Remove', type: FieldType.BUTTON, action: 'remove'},
    ];
  }

  ngAfterViewInit(): void {
    this.filters$
      .pipe(debounceTime(500))
      .subscribe(_ => this.fetch())
    this.itemAction$.subscribe((itemAction: ItemAction<OfferModel>) => {
      switch (itemAction.type) {
        case "remove":
          this.offersApiService.remove(itemAction.item.id).subscribe(_ => this.fetch());
          break;
      }
    });
  }

  updateFilters(param: { currentPage: number }) {
    this.filters$.next({...this.filters$.value, ...param});
  }

  fetch() {
    this.offers$ = this.offersApiService.fetch(this.filters$.value)
  }

}
