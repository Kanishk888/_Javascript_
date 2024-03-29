/* The Datatypes are oraganized in two parts according to (how the values are stored in memory and how we can access the value.) */

//  Primitive[call by value]:

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Object
let userEmail;
const _undefined_ = undefined; // Undefined

const id = Symbol("123"); // Symbol
const anotherId = Symbol("123"); // Symbol

console.log(id === anotherId);

const bigNumber = 3456543576654356754n; //bigInt

// Reference/Non primitive[call by reference]:

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // object
let myObj = {
  name: "hitesh",
  age: 22,
}; // object

const myFunction = function () {
  console.log("Hello world");
}; // functionObject

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/***************************************/

/**
 * Memory's: Stack and Heap
 * 1. Stack[Primitive] -> call by value
 * 2. Heap[Non-Primitive] -> call by reference
 */
//Example(Primitive)
let yourYoutubeName = "hiteshchoudarydotcom";
let anotherName = "chaiaurcode";

anotherName = "None";

console.log(anotherName);
console.log(yourYoutubeName);

// Example(Non-Primitive)
let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "None";

//console.log(userTwo);
console.log(userTwo.email);
//console.log(userTwo);
console.log(userOne.email);

// diagrammtic way of explained:https://excalidraw.com/#json=EhzAIIQRgdyPtOqXdialz,_dOdBOstS9j_LlmnHsW2wA
