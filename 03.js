myFun(); // Second


var myFun = function() {
    console.log("First");
};


myFun();// First


function myFun(){
    console.log("Second");
};


myFun();// First


// Output;
// Second
// First
// First

// Hoisting Concept
//  functions and variables with var followers.are in hoisting 