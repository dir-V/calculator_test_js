const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 500000;
    actual = sum(250000, 250000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -12;
    actual = sum(-6, -6);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 7;
    actual = sum(7, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test("can subtract 2 nums", () =>{
    expected = 12
    actual = subtract(24, 12);
    expect(actual).toBe(expected);
  });

  test('can subtract negative nums', () => {
    expected = 3
    actual = subtract(-3,-6);
    expect(actual).toBe(expected);
  });

  test('can subtract from zero', () =>{
    expected = -3;
    actual = subtract(0, 3);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
