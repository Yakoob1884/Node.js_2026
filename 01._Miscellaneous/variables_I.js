// Node REPL ()
 
// Type coercion

// Rule: Use strict equality checks: === or !==

// node <file name> i terminal for at køre koden

// console.log("Adam");

// Rule: Use const whenever possible, otherwise use let
const myFavoriteNumber = 6;

// const means that it is constant in the assignment

// JavaScript Object
const person ={
    //Key-value pair
    name: "Morten"
};

person.age = 69;

// delete person.name;
// "delete person" Sletter ikke, men ignorer personen

console.log(person);


const things = ["mouse"];

things.push("car");

//things.pop() For at fjerne noget i et array


// Rule: Use comma in console.log 
// becasue if we use + (concatenate) we might coerce and change the values
console.log(things[0], things [1]);

// Data types in JavaScript
// Strings, Boolean, Number, BigInt, null, undefined, Object, Symbol.

const greetingOne = "Hello. This is the introduction class to Node.js"
const greetingtwo = 'Hello. This is the "introduction" class to Node.js'

// String interpolation som er `` som er det der tilader ${}. Så er den også multi-line
const greetingThree = `Hello "${person.name}". This is the introduction class to Node.js`

console.log(greetingOne)
console.log(greetingtwo)
console.log(greetingThree)