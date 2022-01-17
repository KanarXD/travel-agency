import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {Question} from "../../services/dynamic-form.models";

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question!: Question;
  @Input() formGroup!: FormGroup;

  get thisFormGroup(): FormGroup | null {
    if (this.question.options.formGroupName) {
      return this.formGroup.get(this.question.options.formGroupName) as FormGroup;
    }
    return null;
  }

  get formControl(): FormControl | null {
    return this.formGroup.get(this.question.options.key) as FormControl;
  }

  get errors(): ValidationErrors {
    const formControlErrors = this.formControl?.touched ? this.formControl?.errors : {};
    const formGroupErrors = this.thisFormGroup?.touched ? this.thisFormGroup?.errors : {};
    const formControlGroupErrors = this.thisFormGroup?.get(this.question?.options?.key)?.touched ?
      this.thisFormGroup?.get(this.question?.options?.key)?.errors : {};
    return {...formControlErrors, ...formGroupErrors, ...formControlGroupErrors};
  }

  hasErrors(): boolean {
    return Object.keys(this.errors).length > 0;
  }
}
