import {Component, OnInit} from '@angular/core';
import {DataGridRowConfig, FieldType} from "../../../../shared/components/data-grid/data-grid.models";
import {HotelKeys} from "../../services/hotels.models";
import {HotelsApiService} from "../../services/hotels.api.service";
import {HotelsQuestionsService} from "../../services/hotels.questions.service";
import {ServerApiAction} from "../../../../shared/services/api.models";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html'
})
export class HotelsComponent implements OnInit {
  dataGridConfig!: DataGridRowConfig<HotelKeys>[];

  constructor(
    public hotelsApiService: HotelsApiService,
    public hotelsQuestionsService: HotelsQuestionsService
  ) {
  }

  ngOnInit(): void {
    this.dataGridConfig = [
      {key: 'id'},
      {key: 'name'},
      {key: 'location'},
      {header: 'Remove', type: FieldType.BUTTON, action: ServerApiAction.Remove}
    ];
  }

}
