import {AbstractControl, ValidationErrors} from "@angular/forms";

export class FormValidators {

  static futureDate(control: AbstractControl): ValidationErrors | null {
    const date: Date = new Date(new Date(control.value).toDateString());
    const currentDate: Date = new Date(new Date().toDateString());
    if (date >= currentDate) {
      return null;
    }
    return {oldDate: true};
  }

  static dateAfterDate(control: AbstractControl): ValidationErrors | null {
    const values: string[] = Object.values(control.value) as string[];
    const date1 = new Date(new Date(values[0]).toDateString());
    const date2 = new Date(new Date(values[1]).toDateString());
    if (date1 <= date2) {
      return null;
    }
    return {dateNotAfterDate: true};
  }

}
