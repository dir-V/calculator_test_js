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
    expect(acutal).toBe(expected);
  });

  test('can add zero', () => {
    expected = 7;
    actual = sum(7, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  

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
