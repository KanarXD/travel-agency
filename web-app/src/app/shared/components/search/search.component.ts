import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Question} from "../dynamic-form/services/dynamic-form.models";
import {DynamicFormComponent} from "../dynamic-form/components/dynamic-form/dynamic-form.component";
import {debounceTime, map} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements AfterViewInit {
  @Input() questions: Question[] = [];
  @Output() searchChange: EventEmitter<any> = new EventEmitter();
  @ViewChild('dynamicForm') dynamicForm!: DynamicFormComponent;

  ngAfterViewInit(): void {
    this.dynamicForm.ngForm.valueChanges?.pipe(
      debounceTime(1000),
      map((options: { [key: string]: string }) =>
        Object.fromEntries(Object.entries(options).filter(([_, v]) => v != null)))
    ).subscribe((options: { [key: string]: string }) => this.searchChange.emit(options));
  }

}
