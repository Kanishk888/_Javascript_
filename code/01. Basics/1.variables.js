const accountId = 144553; // const = constant value
let accountEmail = "Helloworld.com"; // variable value
var accountPassword = "12345"; // variable value
accountCity = "Jaipur"; // by default variables are declared as var, when variable is declared without let or const.
let accountState;

// accountID = 2 // not allowed

console.log(accountId);

accountEmail = "hc@hc.com";
accountPassword = "212121212";
accountCity = "Bengaluru";

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// console.table();
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/* 
Scope: {
}
*/

/*
Prefer not to use var,
because of issue in block scope and functional scope
*/
