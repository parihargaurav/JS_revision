var variable = 10;

(() => {
    console.log(variable); // output: 10
    
    variable = 20;
    
    console.log(variable); // output: 20
})(); // this type of functions are called as iife - immediately invoked function expression

console.log(variable); // output: 20
var variable = 30;

// Hoisting Concept
//  functions and variables with var followers.are in hoisting 