import {FormValidators} from "./form-validators";
import {AbstractControl} from "@angular/forms";

describe("FormValidators", () => {

  it('should return {nullValue: true} when value is null', () => {
    const control = {value: null};
    expect(FormValidators.notNull(control as AbstractControl))
      .toEqual({nullValue: true});
  });

  it('should return {nullValue: true} when value is string "null"', () => {
    const control = {value: "null"};
    expect(FormValidators.notNull(control as AbstractControl))
      .toEqual({nullValue: true});
  });

  it('should return null when value is not null', () => {
    const control = {value: "hello"};
    expect(FormValidators.notNull(control as AbstractControl))
      .toBeNull();
  });

});
