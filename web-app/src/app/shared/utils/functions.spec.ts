import {flattenObject} from "./functions";

describe("functions", () => {

  it('should return empty object when value is empty object', () => {
    const value = {};
    expect(flattenObject(value))
      .toEqual(value);
  });

  it('should return the same object when value is flat object', () => {
    const value = {num: 1, str: "abcde", null: null};
    expect(flattenObject(value))
      .toEqual(value);
  });

  it('should return the flat object when value is not flat object', () => {
    const value = {num: 1, str: "abcde", null: null, obj: {nu: 1, s: "abcde", n: null}};
    const expected = {num: 1, str: "abcde", null: null, nu: 1, s: "abcde", n: null};

    expect(flattenObject(value))
      .toEqual(expected);
  });

});
