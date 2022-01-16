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
      let v = this.formGroup.get(this.question.options.formGroupName);
      debugger;
      return v as FormGroup;
    }
    return null;
  }

  get formControl(): FormControl | null {
    let v = this.formGroup.get(this.question.options.key);
    debugger;
    return v as FormControl;
  }

  get errors(): ValidationErrors {
    const formControlErrors = this.formControl?.errors;
    const formGroupErrors = this.thisFormGroup?.get(this.question?.options?.key)?.errors;
    return {...formControlErrors, ...formGroupErrors};
  }
}
