import { Component, OnInit } from '@angular/core';
import {OffersApiService} from "../../services/offers.api.service";
import {OfferModel} from "../../models/offer.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers$: Observable<OfferModel> = this.offersApiService.fetch();

  constructor(private offersApiService: OffersApiService) { }

  ngOnInit(): void {
  }

}
