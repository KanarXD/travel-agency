import {AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ServerApiService} from "../../../../services/server.api.service";
import {CoreService} from "../../../../services/core.service";
import {Question, QuestionService} from "../../../dynamic-form/services/dynamic-form.models";
import {BehaviorSubject, map, Observable, Subject, tap} from "rxjs";
import {ItemAction} from "../../../../utils/app.models";
import {ResponseData, ServerApiFilter} from "../../../../services/api.models";
import {DataGridRowConfig} from "../../../data-grid/data-grid.models";
import {Item, PagePrivileges} from "../../services/page.models";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit, AfterViewInit {
  @Input() serverApiService!: ServerApiService<Item>;
  @Input() dataGridConfig!: DataGridRowConfig<string>[];
  @Input() addItemQuestionService!: QuestionService;
  @Input() searchQuestionService!: QuestionService;
  @Input() pagePrivileges: PagePrivileges = {};
  @Input() itemName!: string;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<NgbModal>;

  addItemQuestions$!: Observable<Question[]>;
  searchQuestions$!: Observable<Question[]>;
  filters$: BehaviorSubject<ServerApiFilter> = new BehaviorSubject(new ServerApiFilter());
  itemAction$: Subject<ItemAction<Item>> = new Subject();
  items$!: Observable<ResponseData<Item>>;
  insertData!: { [key: string]: string };

  constructor(
    public coreService: CoreService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    if (this.addItemQuestionService) {
      this.addItemQuestions$ = this.addItemQuestionService.getQuestions();
    }
    if (this.searchQuestionService) {
      this.searchQuestions$ = this.searchQuestionService.getQuestions();
    }
    this.dataGridConfig = this.dataGridConfig.filter((dataGridRowConfig: DataGridRowConfig<string>) =>
      this.coreService.hasPrivilege(dataGridRowConfig.privilege));
  }

  ngAfterViewInit(): void {
    this.filters$.subscribe(_ => this.fetchItems())
    this.itemAction$.subscribe((itemAction: ItemAction<Item>) => {
      switch (itemAction.type) {
        case "update":
          this.updateItem(itemAction.item);
          break;
        case "remove":
          this.removeItem(itemAction.item.id);
          break;
        case "add":
          this.addItem(itemAction.item);
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

  fetchItems(): void {
    if (!this.coreService.userStatus$.getValue().isLogged) {
      return;
    }
    this.items$ = this.serverApiService.fetch(this.filters$.value).pipe(
      tap((responseData: ResponseData<Item>) => {
        responseData.data.forEach((item: Item) => {
          this.dataGridConfig.forEach((config: DataGridRowConfig<string>) => {
            if (config.key && config.service && item[config.key]) {
              item[config.key + '-ref'] = config.service.get(item[config.key]).pipe(map((item: Item) => item.name));
            }
          });
        });
      })
    );
  }

  updateItem(item: Item): void {
    if (!this.coreService.hasPrivilege(this.pagePrivileges.update)) {
      console.log(`Privilege: ${this.pagePrivileges.update} required`);
      return;
    }
    this.insertData = item;
    this.modalService.open(this.modalTemplate).result.then(
      (result) => {
        console.log("closed");
        this.serverApiService.add(result).subscribe(_ => this.fetchItems());
      },
      _ => {
        console.log('dismissed');
      });
  }

  async openModal() {
    this.insertData = {};
    this.modalService.open(this.modalTemplate).result.then(
      (result) => {
        console.log("closed");
        this.addItem(result)
      },
      _ => {
        console.log('dismissed');
      });
  }

  private removeItem(id: number): void {
    if (!this.coreService.hasPrivilege(this.pagePrivileges.delete)) {
      console.log(`Privilege: ${this.pagePrivileges.delete} required`);
      return;
    }
    this.serverApiService.remove(id).subscribe(_ => this.fetchItems());
  }

  private addItem(item: Item): void {
    if (!this.coreService.hasPrivilege(this.pagePrivileges.update)) {
      console.log(`Privilege: ${this.pagePrivileges.update} required`);
      return;
    }
    console.log('add item');
    console.log(item);
    this.serverApiService.add(item).subscribe(_ => this.fetchItems());
  }

}
