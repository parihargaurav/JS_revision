// // function declaration
// function gaurav(num){
//     return num + num;
// };
// gaurav();
// console.log(gaurav)

// function expression ; storing function inside a variable is function expression.

// const square = function (num){
//     return num * num;
// };
// console.log(square(5));


// first class functions- where functions can be treated as variable is first class functions.
// function abc(num){
//     return num * num;
// };

// function displaySquare(fn){
//     console.log("ok " + fn(2));
// }
// displaySquare(abc);



// IIFE - immediately invoked function execution.

// // expression;
// (function square(num){
//     console.log(num*num); // 100
// })(10);


// // example using iife in closures
// (function(x){
//     return (function(y){
//         console.log(x); //2
//     })(1);
// })(2);


// // function scope example;
// for(let i = 0; i< 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000);
// }// 0 1 2 3 4  because of block scope

// for(var i = 0; i< 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000);
// }// 5 5 5 5 5  function scope 


// hoisting in function;
// functions follows hoisting

// console.log(w); // undefined
// var w =1;  

// console.log(w); // Cannot access 'w' before initialization
// const/let  w =1;  



// functionName();
// function functionName() {
//     console.log("Hello, World!"); // Hello, World!

// }

// /// imp

var x1 =21; // global scope  variable
var fun = function(){
    console.log(x); // undefined
    var x = 20; // local scope variable.
    console.log(x); // 20
};
console.log(x1);//21
fun();
// as it creates a separate execution context for that function/  local scope
// hoisting is a 2 step process. first it will create  and run the whole code and then will run the local scope code.




// params and argument.

function abcd(num){ // nums is parameter or simply params
    console.log(num*num); //361


};
abcd(19);// 19 passed as argumengt.




// The Spread Operator is used to 'spread' an iterable into its elements, while the Rest Operator 'collects' multiple elements into an array.

function multiply(...nums){// rest operator
    console.log(nums[0]*nums[1]); // 30
}
var arr = [5, 6];

multiply(...arr);// spread operator




// a callback function is a function passed into another function as an argument,
// which then invoked inside the outer function to complete some kind of routine or action.


// Callback function
// document.addEventListener("click", function(params){


// }); // functions like map , filter , reduce settimeout



// arrow function - introduced in es6 version

const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

console.log(add(4,5)); // 9








// difference between arrow function and normal function.

function abs(num){ // normal function
    return num;
}

const absw = (nums) =>{
    return nums;  // arrow function
};



// in normal function we need to use  return  keyword
// but in arrow function we don't need it

const absde = (nums) => nums+nums;


// this keyword;

let user = {
    username: "Gaurav",
    r: () =>{
        console.log(this.username) // undefined -- the arrow function inherits this from the global scope
    },
    r2 () {
        console.log(this.username) // gaurav  -- Regular functions have their own this context, which is determined by how the function is called.

    }
};
 user.r();
 user.r2();


