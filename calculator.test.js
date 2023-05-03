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
  test('can multiply postive numbers', () =>{
    expected = 25
    actual = multiply(5, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply negative numbers', () =>{
    expected = 25
    actual = multiply(-5, -5);
    expect(actual).toBe(expected);
  });

  test('can multiply one postive, and one negative number', () =>{
    expected = -25
    actual = multiply(-5, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () =>{
    expected = 0
    actual = multiply(0, 5);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test('can divide postive numbers', () =>{
    expected = 25
    actual = divide(100,4);
    expect(actual).toBe(expected);
  });

  test('can divide negative numbers', () =>{
    expected = -4
    actual = divide(-20,5);
    expect(actual).toBe(expected);
  });

  test('can divide by zero (no error)', () =>{
    expected = 0
    actual = divide(0,5);
    expect(actual).toBe(expected);
  });

  test('can divide by zero (math error)', () =>{
    expected = Infinity
    actual = divide(5,0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can get remainder', () =>{
    expected = 1
    actual = modulus(7,2);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can get true (even)', () =>{
    expected = true
    actual = even(80);
    expect(actual).toBe(expected);
  });

  test('can get false (even)', () =>{
    expected = false
    actual = even(81);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {
  test('can get false (odd)', () =>{
    expected = false
    actual = odd(80);
    expect(actual).toBe(expected);
  });

  test('can get true (odd)', () =>{
    expected = true
    actual = odd(81);
    expect(actual).toBe(expected);
  });
});
