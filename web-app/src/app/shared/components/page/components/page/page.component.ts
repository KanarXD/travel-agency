import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ServerApiService} from "../../../../services/server.api.service";
import {CoreService} from "../../../../services/core.service";
import {Question, QuestionService} from "../../../dynamic-form/services/dynamic-form.models";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ItemAction} from "../../../../utils/app.models";
import {ResponseData, ServerApiFilter} from "../../../../services/api.models";
import {DataGridRowConfig} from "../../../data-grid/data-grid.models";
import {Item, PagePrivileges} from "../../services/page.models";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, AfterViewInit {
  @Input() serverApiService!: ServerApiService<Item>;
  @Input() dataGridConfig!: DataGridRowConfig<unknown>[];
  @Input() addItemQuestionService!: QuestionService;
  @Input() searchQuestionService!: QuestionService;
  @Input() pagePrivileges: PagePrivileges = {};
  @Input() itemName!: string;

  addItemQuestions$!: Observable<Question[]>;
  searchQuestions$!: Observable<Question[]>;
  filters$: BehaviorSubject<ServerApiFilter> = new BehaviorSubject(new ServerApiFilter());
  itemAction$: Subject<ItemAction<Item>> = new Subject();
  items$!: Observable<ResponseData<Item>>;

  constructor(
    public coreService: CoreService
  ) {
  }

  ngOnInit(): void {
    if (this.addItemQuestionService) {
      this.addItemQuestions$ = this.addItemQuestionService.getQuestions();
    }
    if (this.searchQuestionService) {
      this.searchQuestions$ = this.searchQuestionService.getQuestions();
    }
    this.dataGridConfig = this.dataGridConfig.filter((dataGridRowConfig: DataGridRowConfig<unknown>) =>
      this.coreService.hasPrivilege(dataGridRowConfig.privilege));
  }

  ngAfterViewInit(): void {
    this.filters$.subscribe(_ => this.fetch())
    this.itemAction$.subscribe((itemAction: ItemAction<Item>) => {
      switch (itemAction.type) {
        case "remove":
          if (!this.coreService.hasPrivilege(this.pagePrivileges.delete)) {
            console.log(`Privilege: ${this.pagePrivileges.delete} required`);
            break;
          }
          this.serverApiService.remove(itemAction.item.id).subscribe(_ => this.fetch());
          break;
        case "add":
          if (!this.coreService.hasPrivilege(this.pagePrivileges.update)) {
            console.log(`Privilege: ${this.pagePrivileges.update} required`);
            break;
          }
          let item = itemAction.item;
          console.log('add item');
          console.log(item);
          this.serverApiService.add(item).subscribe(_ => this.fetch());
          break;
      }
    });
  }

  updateFilters(params: any) {
    this.filters$.next({
      ...this.filters$.getValue(),
      ...params
    });
    console.log(this.filters$.getValue());
  }

  fetch() {
    if (this.coreService.userStatus$.getValue().isLogged) {
      this.items$ = this.serverApiService.fetch(this.filters$.value);
    }
  }

}
