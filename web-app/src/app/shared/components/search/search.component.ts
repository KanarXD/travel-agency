import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Question} from "../dynamic-form/services/dynamic-form.models";
import {DynamicFormComponent} from "../dynamic-form/components/dynamic-form/dynamic-form.component";
import {debounceTime, filter} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements AfterViewInit {
  @Input() questions: Question[] = [];
  @Output() searchChange: EventEmitter<any> = new EventEmitter();
  // @Input() filters$:
  @ViewChild('dynamicForm') dynamicForm!: DynamicFormComponent;

  ngAfterViewInit(): void {
    this.dynamicForm.ngForm.valueChanges?.pipe(
      filter(_ => !this.dynamicForm.ngForm.pristine),
      debounceTime(1000)
    ).subscribe((options: { [key: string]: string }) => {
      this.searchChange.emit(options);
    })
  }

}
