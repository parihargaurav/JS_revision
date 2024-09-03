// lexical scope

// closures -- variables that can be accessed from outside of scope to inside but vice verssa is not true.
// CLOSURE GIVES ACCESS TO OUTER FUNCTION'S SCOPE FROM INNER FUNCTION
// var username = "Gaurav";

// function local(){
//     console.log(username) // Gaurav
// };
// local()

// // but vice versa is not true!!!!!!!!!!!!!!!!!!!!!
//     console.log(username) // username is not defined

// function local(){
//     var username = "Gaurav";
// };
// local()

// clousres have scope access of - local scope,  outer scope, global scope

///////////////////////////////////////////////////////

// Q1

// let count = 0;
// (function printCount(){
//     if (count === 0){
//         let count = 1; // shadowing 0 ki jagah 1 kar diya
//         console.log(count); // 1
//     }
//     // here it is 0 only
//     console.log(count); // 0
// })

// ();

// Q2. closure
function createBase(num) {
  return function (innernum) {
    console.log(innernum + num);
  };
}
var addok = createBase(6);
addok(5); // 11
addok(10); // 16

// Q3 - setTimout output
// var is function scoped
// function a(){
//     for(var i = 0; i < 3; i++){
//         setTimeout(function(){            // i i i
//         console.log(i); // what is logged? = 3 3 3
//     }, i * 1000);
//     }
// }
// a();





// let abs = [2, 500, 100, 3]
// abs.sort();
// console.log(abs);// [ 100, 2, 3, 500 ]
// // The sort() method in JavaScript, by default, sorts elements of an array as strings.
