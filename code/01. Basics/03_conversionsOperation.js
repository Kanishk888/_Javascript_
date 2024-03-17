"use strict";

/*type of NaN is a number */

// const { score } = req.body;


// Undefined type converion(number) and typeof underfined:
let score1 = undefined
console.log(typeof score1)
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

// null type conversion(number) and typeof null:
let score2 = null
console.log(typeof score2)
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

// boolean type conversion(number) and typeof boolean:
let score3 = true 
console.log(typeof score3)
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

let score4 = false
console.log(typeof score4)
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)

// string type conversion(number) and typeof string:
let score5 = "33"
console.log(typeof score5)
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5)
console.log(valueInNumber5)

/*special case:*/
let score6 = "33abc"
console.log(typeof score6)
let valueInNumber6 = Number(score6)
console.log(typeof valueInNumber6)
console.log(valueInNumber6)


/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = 1

