import {Component, OnInit} from '@angular/core';
import {OffersApiService} from "../../services/offers.api.service";
import {Observable} from "rxjs";
import {OfferKeys, OfferModel} from "../../services/offers.models";
import {DataGridRowConfig} from "../../../../shared/components/data-grid/data-grid-config";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers$: Observable<OfferModel | OfferModel[] | any> = this.offersApiService.fetch();
  dataGridConfig!: DataGridRowConfig<OfferKeys>[];

  constructor(private offersApiService: OffersApiService) {
  }

  ngOnInit(): void {
    this.dataGridConfig = [
      {key: 'id'},
      {key: 'name'},
      {key: 'basePrice'},
      {key: 'startDate'},
      {key: 'endDate'},
      {key: 'basePrice'},

    ]
  }


}
