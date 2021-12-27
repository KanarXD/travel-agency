import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ServerApiService} from "../../../../services/server.api.service";
import {CoreService} from "../../../../services/core.service";
import {Question, QuestionService} from "../../../dynamic-form/services/dynamic-form.models";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ItemAction} from "../../../../utils/app.models";
import {ResponseData, ServerApiFilter} from "../../../../services/api.models";
import {DataGridRowConfig} from "../../../data-grid/data-grid.models";
import {Item} from "../../services/page.models";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, AfterViewInit {
  @Input() serverApiService!: ServerApiService<Item>;
  @Input() dataGridConfig!: DataGridRowConfig<unknown>[];
  @Input() questionService!: QuestionService;

  questions$!: Observable<Question[]>;
  filters$: BehaviorSubject<ServerApiFilter> = new BehaviorSubject(new ServerApiFilter());
  itemAction$: Subject<ItemAction<Item>> = new Subject();
  items$!: Observable<ResponseData<Item>>;

  constructor(
    private coreService: CoreService
  ) {
  }

  ngOnInit(): void {
    if (this.questionService) {
      this.questions$ = this.questionService.getQuestions();
    }
  }

  ngAfterViewInit(): void {
    this.filters$.subscribe(_ => this.fetch())
    this.itemAction$.subscribe((itemAction: ItemAction<Item>) => {
      switch (itemAction.type) {
        case "remove":
          this.serverApiService.remove(itemAction.item.id).subscribe(_ => this.fetch());
          break;
        case "add":
          let item = itemAction.item;
          console.log('add item');
          console.log(item);
          this.serverApiService.add(item).subscribe(_ => this.fetch());
          break;
      }
    });
  }

  updateFilters(param: { currentPage: number }) {
    this.filters$.next({...this.filters$.value, ...param});
  }

  fetch() {
    if (this.coreService.userStatus$.getValue().isLogged) {
      this.items$ = this.serverApiService.fetch(this.filters$.value);
    }
  }

}
