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
