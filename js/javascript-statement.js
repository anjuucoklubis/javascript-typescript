/* SEMICOLON */
let a, b, c;
a = 10;
b = 10;
c = a + b;
console.log(c);

let d, e, f;
//d= 10 e=10 f=d+e //==> error karena tidak ada semicolon
d = 10;
e = 10;
f = d + e; //==> true
(d = 10), (e = 10), (f = d + e); //==> true
console.log(f);

/* =================================================================*/
/* =================================================================*/
/* =================================================================*/

/* KEYWORD */
var number = 10; // Var Declaration variable

let numberlet = 10; // let Declaration block variable

const numberconst = 10; // const Declaration block constant

if (d > e) {
  // if block statement on a conditional
  console.log("true");
} else {
  console.log("false");
}

switch (d) {
  // switch block statement on a conditional
  case 10:
    console.log("10");
    break;
  case 20:
    console.log("20");
    break;
  case 30:
    console.log("30");
    break;
  case 40:
    console.log("40");
    break;
  default:
    console.log("default");
    break;
}

for (let i = 0; i < 9; i++) {
  // for block statements
  z = d + i;
}
console.log(z);

function sum(a, b) {
  // function statement
  return a + b;
  // return statement
}

function errorHandling() {
  const scoreA = 100;
  const scoreB = 90;
  try {
    if (scoreA == scoreB) {
      console.log("nilai mereka sama");
    } else {
      console.log("nilai mereka tidak sama");
    }
  } catch (err) {
    console.log(err);
  }
}
