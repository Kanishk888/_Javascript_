// comparison operations
console.table([2 > 1, 2 >= 1, 2 < 1, 2 == 1, 2 != 1]);

// in order compair to values there datatype must be same
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// the reason is that an equality check (==) and comparisons >, <, >= and <= works differently
// Comparisons convert null to a number, treating it as 0. That's why [null >= 0] is true and [null > 0] is false.
