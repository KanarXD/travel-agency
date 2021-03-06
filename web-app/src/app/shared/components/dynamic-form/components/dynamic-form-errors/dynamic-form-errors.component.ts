import {Component, Input} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-errors',
  templateUrl: './dynamic-form-errors.component.html'
})
export class DynamicFormErrorsComponent {
  @Input() errors?: ValidationErrors | null;

  getErrors(): string {
    return JSON.stringify(this.errors);
  }
}
