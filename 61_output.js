// 61
// let name;
// nmae = {};
// console.log(name); // undefined

// //62
// function sum(a, b, c){
//     return a + b + c;
// }
// console.log(sum(1 , 2 , "4")) // 34
// as in js it always executes from left to write to evaluate.


// 63
// let number = 0;
// console.log(number++);//0
// console.log(number--);//1
// console.log(++number);//1
// console.log(--number);//0


// 65
// function getAge(...args){
//     console.log(typeof args) // object
// }

// getAge(21);
// The console will log "object" because args is an array, and arrays in JavaScript are of type "object".

// // 67
// const sum = eval(10*10 +10); // take as operation operator.
// console.log(sum); //110

//69

// const obj = { a: "one", b: "two", a: ""};
// console.log(obj); // { a: "", b: "two" }
// // Duplicate keys: In an object, if you define the same key multiple times, the last occurrence of the key will overwrite the previous ones.


//70

// for(let i = 0; i<5; i++){
//     if(i===3) continue;
//     console.log(i); // 0 1 2 4
// }


// 71
// const foo = () => console.log("1")
// const bar = () => console.log("3")
// const baz = () => setTimeout(() => console.log("2")) ;

// baz();
// foo();
// bar();
// // 1 3 2 cause settimeout will be at last in call stack to execute.

// 75

// function gaurav(){
//     return 0;
// }
// console.log(typeof gaurav()) // number as function is returning 0 and 0 is number , then the type will be number.




// 78
// console.log(typeof typeof 1); // string --- as first type of 1 is number then the number is written as string so its type of will be string.
// ------------------------------------------------------------------------
// Everything in JavaScript in either primitive(int,  string, boolean) or an object.
//-------------------------------------------------------------------------
//80

// const numbers = [1, 2, 3];
// numbers[9] = numbers;
// console.log(numbers);// <ref *1> [ 1, 2, 3, <6 empty items>, [Circular *1] ]
// meaning infinite will running with every 9 the index will return numbers array and then it's 9 th index return numbers array.



// 83
// console.log([... "Gaurav"]); // string will break and forms an array [ 'G', 'a', 'u', 'r', 'a', 'v' ]


//  84

// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 5000, 'one');
// })
// const secondPromise = new Promise((res, rej) => {
// setTimeout(res, 1000, 'two');
// })
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res)); // two (delay of 1 sec)

// 85

// const person = {
//     name: "GP",
//     age: 23,
// }
// for(const item in person){
//     console.log(item); // name age

// }
// as it will call only key values 

// 86
//  console.log(typeof 3 + 4 + '6') //number46
// as operations executes from left to right


// 88
// console.log(( 3 + 4 + + '5'))// = 12 //number
// in any string if + , - sign is there then it became integer and it has number type of
// here ++'5' has 2 + the right + make string to int and left + add the int to rest of number.

//90 

// console.log([]==[])// false as no two array has same memory address


// 91

// let data = [1, 2, 3].map(num => {
//     if(typeof num === 'number') return ;
//     return num * 2;
// });
// console.log(data); // [ undefined, undefined, undefined ]
// // because we haven't defined any return statement.


// 92
// function getInfo(member){
//     member.name = 'GP';
// }
// const person = {name: "PPP"};
// getInfo(person);
// console.log(person); // { name: 'GP' }

/*Explanation:

    Objects are passed by reference in JavaScript. When you pass person to the getInfo function, the member parameter refers to the same memory location as the person object.
    Inside the getInfo function, the line member.name = 'GP' directly modifies the name property of the person object.
    So, after the function call, the person object has its name property changed to 'GP'.

Final Output:

    console.log(person) prints { name: 'GP' } because the function modified the original person object. */




// 93

// function Car(){
//     this.make = 'tata';
//     return{make: "KIA"};
// }

// const myCar = new Car();
// console.log(myCar.make); // KIA

/*Explanation:

    this.make = 'tata';:
        Normally, in a constructor function, this would create a property make with the value 'tata'.

    return { make: "KIA" };:
        However, since an object is explicitly returned, this object { make: "KIA" } overrides the default behavior of returning this. As a result, the myCar object becomes { make: "KIA" }.

    new Car():
        When new Car() is called, instead of returning the this object (which would have make: 'tata'), it returns the object { make: 'KIA' }.

Final Output:

    console.log(myCar.make) logs "KIA" because the explicitly returned object { make: "KIA" } replaces the usual behavior of the constructor function. */



// 94
// (() => {
//     let x = (y = 10);
// })();
// console.log(typeof x); // undefined

// as x is let variable and it is block scope and it cannot be access outside scope.



// //95

// (() => {
//     let x = y = 10;
// })();
// // here x is defined as let and y is not defined to it will be assisgned as var y and var can is global scope to access.thus we have value and typeof number
// console.log(typeof y);  // number

// // 96


// (() => {
//     let x =10;
// })();
// (() => {
//     let x =10;
// })();
// console.log(typeof x);  // undefined as x is block level scope scope 


// 97
// (() => {
//     let x =  y =10;
// })();
// (() => {
//     let x =  y =23;
// })();
// console.log( typeof y); //23// number



// 98
// let x = 100;
// (() => {
//     var x =10;
// })();
// console.log(x) // 100

// var x = 100;
// (() => {
//     let x =10;
// })();
// console.log(x) // 100


//99  
// console.log(true  + +"10") // 11 
// as any  +- before any string makes it integer and then it adds the true as 1 and became 11

//100

// console.log(true - true); // 0
// console.log(!true - true); // -1