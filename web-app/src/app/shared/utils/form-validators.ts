import {AbstractControl, ValidationErrors} from "@angular/forms";

export class FormValidators {

  public static notNull(control: AbstractControl): ValidationErrors | null {
    if (control.value === null || control.value === 'null') {
      return {nullValue: true};
    }
    return null;
  }

  public static futureDate(control: AbstractControl): ValidationErrors | null {
    const date: Date = new Date(new Date(control.value).toDateString());
    const currentDate: Date = new Date(new Date().toDateString());
    if (date >= currentDate) {
      return null;
    }
    return {oldDate: true};
  }

  public static dateAfterDate(control: AbstractControl): ValidationErrors | null {
    const values: string[] = Object.values(control.value) as string[];
    if (!values[0] || !values[1]) {
      return null;
    }
    const date1 = new Date(new Date(values[0]).toDateString());
    const date2 = new Date(new Date(values[1]).toDateString());
    if (date1 <= date2) {
      return null;
    }
    return {dateNotAfterDate: true};
  }

}
