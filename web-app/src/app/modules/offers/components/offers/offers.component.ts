import {AfterViewInit, Component, OnInit} from '@angular/core';
import {OffersApiService} from "../../services/offers.api.service";
import {Observable, Subject} from "rxjs";
import {OfferKeys, OfferModel} from "../../services/offers.models";
import {DataGridRowConfig, FieldType, ItemAction} from "../../../../shared/components/data-grid/data-grid.models";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit, AfterViewInit {
  offers$: Observable<OfferModel | OfferModel[] | any> = this.offersApiService.fetch();
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
    this.itemAction$.subscribe((itemAction: ItemAction<OfferModel>) => {
      switch (itemAction.type) {
        case "remove":
          this.offersApiService.remove(itemAction.item.id).subscribe(_ => this.offersApiService.fetch());
          break;
      }
    });
  }

}
