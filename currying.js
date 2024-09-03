// currying in js
// example f(a,b) into f(a)(b)

// q1
// function f(a){
//     return function (b){
//         return a , b;
//     }
// }

// console.log(f(5)(6));


// Q1 implement sum(2)(6)(1);
// Currying is a function that takes multiple arguments as input. 
// It transform the function into a number of functions where every function will accept one argument.

// normal way
// function sum(a, b, c) {
// return a + b + c;}
// console.log(sum(2, 5, 6)); //13

// curry way;
// takes one argument at a time- f(a, b) = f(a), f(b), f(c)

// function sum (a){
//     return function (b){
//         return function (c){
//         return a + b + c;
//     }
// }

// };
// console.log(sum(2)(4)(4)); // 10


// // evaluate (subtract(2, 4));
// function subtract (a){
//     return function (b){
//         return a - b;
//     }
// }
// console.log(subtract(10)(3)) // 7


// Infinite currying

function add(a){
    return function (b){
    if(b) return add(a + b);
    return a;
}
}
console.log(add(2)(3)(4)());
// 2+3 = 5 then 5+4 = 9