"use strict"; // treat all JS code as newer version

// alert(3 + 3); // we are using nodejs, not browser

console.log(3 
    + 
    3) // code readability should be high

let name = "Hello"
let age = 18
let isLoggedIn = true
let state;

/*Primitive data-types*/
// number => (range 2^53)
// bigInt
// string => ""
// booleam => true/false
// null => standalone value(representation of empty value)
// undefined => value is not assigned yet
// symbol => to find uniqueness

/*derived data-type*/
// object

console.log(typeof "hello") // string
console.log(typeof 18) // number
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined