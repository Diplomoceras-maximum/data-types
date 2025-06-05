// Data Types

// There are 8 data types in javascript:
// string
// number
// bigint
// boolean
// undefined
// null
// symbol
// object (objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, etc)

// A javascript variable can hold any type of data
// Javascript has "dynamic types", meaning the same variable can hold different data types

// String

// A string is a series of characters that are written in quotes
// Strings can be written in double or single quotes
// Quotes can be used inside strings using the opposite quotes

let string1 = "Hello World";
let string2 = "Welcome!";
let string3 = "You are a 'user'";

console.log(string1); // Hello World
console.log(string2); // Welcome!
console.log(string3); // You are a 'user'

console.log(typeof string1); // string
console.log(typeof string2); // string
console.log(typeof string3); // string

// Number

// All javascript numbers are stored as decimal numbers (float)
// Numbers can be written with or without decimal places.

let num1 = 15;
let num2 = 15.0;

console.log(num1); // 15
console.log(num2); // 15

console.log(typeof num1); // number
console.log(typeof num2); // number

// Very small or very large numbers can be written with scientific (exponential) notation

let num3 = 15e5;
let num4 = 15e-5;

console.log(num3); // 1500000
console.log(num4); // 0.00015

console.log(typeof num3); // number
console.log(typeof num4); // number

// BigInt

// BigInt data type can hold numbers + or - (2^53 - 1), that number type cannot do
// BigInt is created by appending "n" to the edn of an integer

let bigint = 123456789012345678901234567890n;

console.log(bigint); // 123456789012345678901234567890n

console.log(typeof bigint); // bigint

// Without appending an "n"

let bigint2 = 123456789012345678901234567890;

console.log(bigint2); // 1.2345678901234568e+29 aproximate answer

console.log(typeof bigint2); // number

// Boolean

// Boolean type has only two values "true" and "false"
// Used to store yes/no values, "true" means yes, correct, and "false" means no, incorrect

let bool1 = 1;
let bool2 = 2;
let bool3 = 3;
let bool4 = 5 > 1;
let bool5 = true;

console.log(bool1 == bool2); // false ( 1 does not equal 2)
console.log(bool1 < bool3); // true (1 is smaller than 3)

console.log(typeof bool4); // boolean
console.log(typeof bool5); // boolean

// null

// null data type only contains "null"
// null represents "nothing", "empty", or "value unknown"

let name = null;

console.log(name); // null

console.log(typeof null); // object

// undefined

// undefined data type only contains "undefined"
// undefined represents "value is not assigned"

let age;

console.log(age); // undefined

console.log(typeof age); // undefined
