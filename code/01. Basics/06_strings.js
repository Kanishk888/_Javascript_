const name = "hitesh";
const repoCount = 50;

console.log(name + repoCount + " Value"); // this way is deprecated

/*string interpolation[`${//placeholder}`] */
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

/**
 * Ways of declaring strings:
 * 1. const/let variable = "string";
 * 2. const/let variable = new String("string");
 *
 * String constructor provides some additional methods/functions, these methods are used to get additional information about string and also used to manipulate it.
 */

const gameName = new String("hitesh-hc");

console.log(gameName[0]); //
console.log(gameName.__proto__);

// .length method:
console.log(gameName.length);

// toUpperCase:
console.log(gameName.toUpperCase());

// charAt:
console.log(gameName.charAt(3));

// indexOf:
console.log(gameName.indexOf("e"));

// substring:
const newString = gameName.substring(0, 4);
console.log(newString); // 4 is exclusive

// slice:=> hello World

// some other string methods/functions
/**
 * .trim()
 * .concat()
 * .trimStart()
 * .trimEnd()
 * .split()
 */
