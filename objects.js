// objects in js
//  An object is essentially a collection of key-value pairs, where each key (also called a property) is a string (or symbol) and each value can be any type of data, including another object, function, array, etc.

// const user = {
//     name: "Gaurav",
//     age: 24,
//     "Like the way": true,
// };
// // user.name = "";

// console.log(user.name) // Gaurav
// console.log(user["Like the way"]); // true

// // imp q
// const fun = (function (a){
// delete a; // delete only used when to delete from an object not from local variable
// // whereas a is local variable that will return the value. hence a will not be affected.
// return a;

// })(5);
// console.log(fun); // 5

// // for in loop in objects:
// // The for...in loop in JavaScript is used to iterate over the properties (keys) of an object.

// const ok ={
//     name: "Gaurav",
//     age: 24,
//     "Like the way": true,
//     };
//     for (let key in ok) {
//     console.log(key, ok[key]); //
// }

// Q2 - create a function multiplybytwo(obj) that
// multiplies all numeric property values of nums by 2.

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// multiplyByTwo(nums);

// function multiplyByTwo(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(nums); // { a: 200, b: 400, title: 'My nums' }


// Q3 what is the output of code ?


// const a = {};
// const b = {key: "b"};
// const c = {key: "c"};

// a["[object Object]"] = 123;
// a[b] = 123;

// a["[object Object]"] = 456; // overlap the 123
// a[c] = 456;


// console.log(a[b]); // 456




// // output:

// const settings = {
//     username: "Gaurav",
//     level: 19,
//     health: 90,
// };
// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data); // {"level":19,"health":90}




// // Q - What is destructuring in objects?
// // ''' Destructuring in objects JavaScript is a feature that allows you to extract properties from an object and assign them to variables.
//  let user ={
//     name: "Gaurav",
//     age: 24,
//     fullName: {
//         first: "Gaurav",
//         last: "Parihar",
//     },
// };

// const name = "GP lone wolf"
// const {fullName: {first}} = user;

// // console.log(fullName); // { first: 'Gaurav', last: 'Parihar' }

// console.log(first); // Gaurav




// object referencing 

let c = { greeting : "Hey!"};
let d;
d = c;
c.greeting = "Hello";

console.log(d.greeting); // Hello;
// here we are providing reference to value not shifting actual value form one variable to another.



// A shallow copy occurs when you copy the reference of an object to a new variable.
// A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays. 

