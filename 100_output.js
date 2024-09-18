//1
// let a = [];
// let b= [];
// console.log(a==b); // false 
// console.log(a===b); // false 
// Reason: as we compare the arrays, here comparing array means comparing there memory address. hence no two array have same memory address.

// //2
//  let a = [];
//  let b = a; 
//  console.log(a==b); // true
//  console.log(a===b); // true
 // Reason: here we are not creating a new array, we are just assigning the reference of a to b hence the memory address will remain the same.


// // 3
// let a = [20];
// let b = ['20'];
// console.log(a[0]==b[0]); // true
// console.log(a[0]===b[0]); // false  
// Reason : Type check as first one in integer and second is string.


//4
// let z = [1, 2, 3, 4];
// let q  = {name : "gaurav"}; // this is for distraction 
// console.log(...z);  // 1 2 3 4 // destructuring of array.


//5
// console.log(typeof NaN); // number
// reason: nan is a special number that appears when we say divide string with number ; gaurav/2 = NaN.



//6 
// let data = 10 - + 10
// console.log(data); // 0

// 7
// const set = new Set([1, 3, 5, 2, 5, 4, 1]);
// console.log(set.size); // 5
// console.log(set); // Set (5) = 1, 3, 5, 2, 4

//8 
// const data = {name: "Gaurav"};
// console.log(delete data); // false - we can't delete the data directly , that's why it is showing false cause data is present.
// // console.log(delete data.name); true -  succesfully deleted.
// console.log(data); // {name: "Gaurav"} - data is still present.

//9
// const data = ["Peter", "anil", "sam"];
// const [y] = data;
// console.log(y);// Peter
// reason: array me se single element ko print karana hai. Whole array won't be printed.

//10
// to get second element;
// const data = ["Peter", "anil", "sam"];
// const [,y] = data;
// console.log(y);// anil 
// // Reason: we use , operator  to get second value


// 11
// const data = {name: "Gaurav", age: 29, skill : "244"}; // object
// // how to get name age skill property without using .operator 
// const {name} = data;
// console.log(name); // Gaurav

// 12
// JS Object destructuring using spread operator{...}
// let data = {name: "Gaurav", age: 23, skill: "JavaScript"};
// let info = {city: "Jodhpur", mail: "gaurav@gmail.com"};
// data = {...data, ...info}; // merge 2 objects 
// console.log(data);
/*{
  name: 'Gaurav',
  age: 23,
  skill: 'JavaScript',
  city: 'Jodhpur',
  mail: 'gaurav@gmail.com'
} */


// 13 
// let data = {name: "Gaurav", age: 23, skill: "JavaScript"};
// let info = {city: "Jodhpur", mail: "gaurav@gmail.com", skill : "C"};
// data = {...data, ...info}; // merge 2 objects 
// console.log(data);
/*{
  name: 'Gaurav',
  age: 23,
  skill: 'C',
  city: 'Jodhpur',
  mail: 'gaurav@gmail.com'
} */

/*Key Points:

    The spread operator (...) is used to copy properties from one object to another.
    If there are duplicate keys, the last object's value for that key takes precedence.
     */


    // // 15 tricky 
    // const name = 'GP';
    // console.log(name()); // TypeError: name is not a function


// 16 
// const result = false || {} || 45 || null;
// console.log(result); // {}
// // as it will take first positive value that is here an object {}

// // 17
// const result = undefined || null || ''|| false;
//  console.log(result); // false
 /* Main reason here is if none of the value is true then it will take last value for outcome . here it is false if it is undefined or empty string '' it will give that only. */

// 18 
//  const result = [] || {} || 45 || null;
//  console.log(result); // []
/* we take array and object as true value. */



// 19 
// console.log(Promise.resolve()); // Promise { 5 }
// here promise is resolved and it is fulfilled.


// 20 
// console.log('' == null); // false
// console.log('' == undefined); // false
// console.log(null === undefined); // true

/*The difference between == (loose equality) and === (strict equality) in JavaScript is important when comparing values like null and undefined.
1. Loose Equality (==):

When using ==, JavaScript performs type coercion, meaning it tries to convert the values being compared into the same type before making the comparison.

javascript

console.log(null == undefined); // true

    null and undefined are considered equal when using == because they are both treated as "empty" or "non-existent" values. Even though they are different types (null is an object and undefined is its own type), JavaScript considers them equivalent in value when type conversion occurs.

2. Strict Equality (===):

When using ===, JavaScript does not perform type coercion. It checks both the value and the type for equality.

javascript

console.log(null === undefined); // false

    Here, null and undefined are not equal because they are of different types:
        null is an object type.
        undefined is of its own type undefined.

Since strict equality compares both the value and type, and these two values are of different types, the result is false.
Summary:

    null == undefined is true because loose equality (==) converts them to the same type, treating them as similar "empty" values.
    null === undefined is false because strict equality (===) checks both the type and value, and they have different types (null is an object, undefined is undefined).

Key Points:

    Loose equality (==) allows type coercion (conversion), so it’s more lenient.
    Strict equality (===) checks both type and value, making it more precise. */