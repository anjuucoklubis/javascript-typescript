/* CONST */

/* =================================================================================== */
// Note :
// - Const Statement not changed value
// - Const Statement not reassigned
// - Const Statement must be assigned
/* =================================================================================== */


/* =================================================================================== */
/* TRUE STATMENT CONST */
const myName = "Anju"
const myMarga = "Lubis"
const myFullName= (`Nama lengkap saya adalah ${myName+myMarga}`)
console.log(myFullName)

const myage = 12
console.log(myage)
/* =================================================================================== */


/* =================================================================================== */
/* FALSE STATMENT CONST */
const value = "Anju";
value = "lubis";  // ==> will be error, beacuse const statement not have change value
console.log(value);

const value1;   // ==> will be error, because const statement must be assigned / initialized value
value1 = "lubis";
console(value1);

const value2 = 123;
value2 = 123;   // ==> will be error, because const statement not reassigned
value2 = value2 + 45;
console.log(value2);
/* =================================================================================== */


