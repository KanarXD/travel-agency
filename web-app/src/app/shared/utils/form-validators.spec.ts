import {FormValidators} from "./form-validators";
import {AbstractControl} from "@angular/forms";

describe("FormValidators", () => {

  it('should return {nullValue: true} when value is null', () => {
    const control = {value: null};
    const expected = {nullValue: true};
    expect(FormValidators.notNull(control as AbstractControl))
      .toEqual(expected);
  });

  it('should return {nullValue: true} when value is string "null"', () => {
    const control = {value: "null"};
    const expected = {nullValue: true};
    expect(FormValidators.notNull(control as AbstractControl))
      .toEqual(expected);
  });

  it('should return null when value is not null', () => {
    const control = {value: "hello"};
    expect(FormValidators.notNull(control as AbstractControl))
      .toBeNull();
  });

  // it('should return null date is in the future', () => {
  //   const control = {value: ;
  //   expect(FormValidators.futureDate(control as AbstractControl))
  //     .toBeNull();
  // });

  // it('should return null when first date is before second date', () => {
  //   const control = {value: ;
  //   expect(FormValidators.futureDate(control as AbstractControl))
  //     .toBeNull();
  // });

});
