"use strict";

/*typeof NaN is a number */

// const { score } = req.body;

// Undefined type converion(number) and typeof :
let score1 = undefined;
console.log(typeof score1);
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

// null type conversion(number) and typeof :
let score2 = null;
console.log(typeof score2);
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// boolean type conversion(number) and typeof :
let score3 = true;
console.log(typeof score3);
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score4 = false;
console.log(typeof score4);
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

// string type conversion(number) and typeof :
let score5 = "33";
console.log(typeof score5);
let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

/*special case:*/
let score6 = "33abc";
console.log(typeof score6);
let valueInNumber6 = Number(score6);
console.log(typeof valueInNumber6);
console.log(valueInNumber6);

/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

// Number type conversion(Boolean) and typeof :
// Using a non zero number
let isLoggedInTrue = 1;
let valueInBool1 = Boolean(isLoggedInTrue);
console.log(typeof valueInBool1);
console.log(valueInBool1);

// Using a zero number
let isLoggedInFalse = 0;
let valueInBool2 = Boolean(isLoggedInFalse);
console.log(typeof valueInBool2);
console.log(valueInBool2);

// String type coversion(Boolean) and typeof:
let isLoggedIn_ = "";
console.log(typeof isLoggedIn_);
let valueInBool3 = Boolean(isLoggedIn_);
console.log(typeof valueInBool3);
console.log(valueInBool3);

let _isLoggedIn = "Kanishk";
console.log(_isLoggedIn);
let valueInBool4 = Boolean(_isLoggedIn);
console.log(typeof valueInBool4);
console.log(valueInBool4);

/*
    1 => true; 0 => false

    "" => false
    "Kanishk" => true
*/

// Number type conversion(String) and typeof:
let someNumber = 33;
console.log(someNumber);

let valueInString = String(someNumber);
console.log(typeof valueInString);
console.log(valueInString);

// ***************************Operations*************************

let value = 3;
let negValue = -value;
console.log(negValue);

// Basic Maths Operation:
/*Addition, subtraction, multiplication, power(exponential), division, remainder */
console.table([2 + 2, 2 - 2, 2 * 2, 2 ** 3, 2 / 3, 2 % 3]);

let str1 = "Hello";
let str2 = ", Kanishk";

let str3 = str1 + str2;
console.log(str3);

// why string to number
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// to study about type conversion : https://tc39.es/ecma262/#sec-abstract-operations

console.log(3 + 4 * 5 % 3); // not recommened

console.log(true);
console.log(+true);
// console.log(true+); // error

console.log(false);
console.log(+false);
// console.log(false+); // error

console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.table([num1, num2, num3])

let gameCounter = 100;
gameCounter++;
/**
 * prefix : ++x, --x
 * postfix : x++, x--
 */
// to study about prefix and postfix operations : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
console.log(gameCounter);