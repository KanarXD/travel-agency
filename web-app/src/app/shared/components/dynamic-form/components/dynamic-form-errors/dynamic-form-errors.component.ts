import {Component, Input} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-errors',
  templateUrl: './dynamic-form-errors.component.html',
  styleUrls: ['./dynamic-form-errors.component.scss']
})
export class DynamicFormErrorsComponent {
  @Input() errors?: ValidationErrors | null;

  getErrors(): string {
    return JSON.stringify(this.errors);
  }
}
