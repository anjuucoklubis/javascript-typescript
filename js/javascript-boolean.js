/* Boolean (Only have two values)
    - YES / NO
    - ON / OFF
    - TRUE / FALSE
    - Use `Boolean()`
    - 
*/

//0 (zero) is false
let value = 0;
const zero = Boolean(value);
console.log("Zero : ", zero);

// -0 (minues zero) is false
let value1 = -0;
const minuesZero = Boolean(value1);
console.log("minuesZero : ", minuesZero);

// ""(string kosong) is false
let value2 = "";
const stringEmpty = Boolean(value2);
console.log("stringEmpty : ", stringEmpty);

// undefined is false
let value3;
const undefined = Boolean(value3);
console.log("undefined : ", undefined);

// null is false
let value4 = null;
const nulll = Boolean(value4);
console.log("nulll : ", nulll);

// false is false
let value5 = false;
const falsee = Boolean(value5);
console.log("falsee : ", falsee);

// NaN is false
let value6 = 10 / "WWWKWKWKWKWKWKWKWKWKWK";
const NaNN = Boolean(value6);
console.log("NaNN : ", NaNN);

// 1 (one) is true
let value7 = 1;
const one = Boolean(value7);
console.log("One : ", one);

// +1 (plus one) is true
let value8 = +1;
const plusOne = Boolean(value8);
console.log("Plus One : ", plusOne);

// "a"(string berisi) is true
let value9 = "anju";
const stringAda = Boolean(value9);
console.log("Ada String : ", stringAda);

// true is true
let value10 = true;
const truee = Boolean(value10);
console.log("Value True : ", truee);

// value / value is true
let value11 = 10 / 10;
const ValueValue = Boolean(value11);
console.log("Value / Value : ", ValueValue);

// new Boolean value
let y = new Boolean(false);
console.log("New Boolean : ", y);

