// let var const
// concept of shadowing.

// var is function scope.
// let and const are block scope.
function test(){
    let a = "Hello";

    if(true){
        let a = "Gaurav";
        console.log(a); // gaurav 
    }
    console.log(a); // hello
}
test()

function test(){
    var a = "Hello";

    if(true){
        var a = "Gaurav";
        console.log(a); // gaurav 
    }
    console.log(a); // gaurav
}
test();

// let and const can't be declared in same scope but var declared .

// const a = 3;
// a = 9 ;  //  TypeError: Assignment to constant variable.

// let and var can be declared with same variable name.

// hoisting phase 
// when js execution context; first it creates reation phase above all execution pahse
console.log(count);
var count = 1; // undefined

console.log(count);
let count1 = 1; //  1
// temporal variable is the time between declaration and initialization of let and const


// imp

// function abc(){
//     console.log(A, B, C);
//     let A = 1; // Cannot access 'A' before initialization
//     var B = 3; // undefined 
//     const C = 9;
// }
// abc();
// // let and const are in temporal dead one. they do hoisting with temporal deadzone.

// temporal zone is a term that where in which variable are in scope but not been declared. 


const square = function (num){
    return num * num;
};
 console.log(square(5));