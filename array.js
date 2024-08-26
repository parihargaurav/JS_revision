// array declaration
// let arr = ["apple"];
// console.log(arr[3]);
// if array has say length of 5 and index 4 and we want  to get 10 then it will give me """"undefined""""".


// we can store objects in js

let person ={
    name:"John",
    age:30,

};
let arr =["abe", 1, person, 4, "bhfbh","gp"]
// console.log(arr[2])// to get object 
// console.log(arr[2].name)// to get property of object
// // while we access the array we start from 0
// // and in counting we have from 1
// console.log(arr.length); // 4

// ///

// // 2 concepts: push an d pop are removing elements from bottom of Array. 
// // while shift and unshit method are used for removing from top of array

// arr.push("gaurav parihar");
// console.log(arr)
// arr.pop()
// console.log(arr)

// // shift= pop , unshift= push

// arr.shift();
// console.log(arr);
// arr.unshift("gaurav");
// console.log(arr);


// Looping in js
// for loop     
// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// // while loop
// let i = 0;
// while(i <arr.length){
//     console.log(arr[i]);

//     i++;

// }




//Inbuilt Loop Methods---


// map is callback function--
const numbers = [1, 2, 3, 4];
 const NewNums= numbers.map( (item, index, array)=> {
return item +5, index+5;
})

console.log(NewNums)


// filter function takes condition to run

const NewNums1 =numbers.filter((item,  array,  index)=>{
return item >1;

})
console.log(NewNums1)

// reduce function - reduce takes an array and reduces down to 1 number

const sum = numbers.reduce((prevItem, currentitem) =>{
    return prevItem + currentitem;
}, 0) // here 0 s assigned for as initialized 0 by default.
console.log(sum) // 10 - 1+2+3+4.

// some function retures true or false.
const some =numbers.some((item,  array,  index)=>{
return item >1;

})
console.log(some) // true

// every function checks for each and every element then return false.
const every =numbers.every((item,  array,  index)=>{
return item >1;
})
console.log(every) // false

// find function: returns value  of the first element in the array where predicate is true  or  give undefined otherwise.
const find =numbers.find((item,  array,  index)=>{
return item >1;
})
console.log(find) // 2



// spread and rest operator->
// spread operator is used to spread the array elements into a new array.
const numbers1 = [1, 2, 3, 4];  
const NewNums2 = [...numbers1, 5, 6, 7];
console.log(NewNums2) // 1,2,3,4,5,6, 7


// rest operator is used to get the rest of the array elements.
const numbers2 = [1, 2, 3, 4, 5,
6, 7];
const NewNums3 = [...numbers2.slice(0, -2)];
console.log(NewNums3) // 1,2,3,4,5


// concat function  -
// The concat() method concatenates (joins) two or more arrays. 
// The concat() method returns a new array, containing the joined arrays. 
const numbers3 = [1, 2, 3, 4];
const NewNums4 = numbers3.concat([5, 6, 7]);
console.log(NewNums4) // 1,2,3,4,5,6,7


// slice function -
// The slice() method returns a shallow copy of a portion of an array into a new array object
const numbers4 = [1, 2, 3, 4, 5, 6, 7];
const NewNums5 = numbers4.slice(0, -2); // here -2 means form back the number will print to 1 to 6 as -1 position for 7 and -2 for 6
console.log(NewNums5) // 1,2,3,4,5

// splice function
// The splice() method adds or removes items to an array. It changes the original array.
const numbers5 = [1, 2, 3, 4, 5, 6, 7];
numbers5.splice(2, 0, 'a', 'b');
console.log(numbers5) // 1,2,a,b,3,4,5,6,7


// fill function
// The fill() method fills elements in an array with a static value.
const numbers6 = [1, 2, 3, 4, 5]
numbers6.fill(0, 2, 4);
console.log(numbers6) // 1,2,0,0,5


// findIndex function

// The findIndex() method returns the index of the first element in the array that satisfies the provided array.    
const numbers7 = [1, 2, 3, 4, 5];
const findIndex = numbers7.findIndex(x => x > 3); // it takes a callback function 
console.log(findIndex) // 3


// flat function
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to make an array.
const numbers8 = [1, 2, [3, 4, [5,
6]], 7];
const flat = numbers8.flat(2); // here 2 means it will go up to till last element of array.
console.log(flat) // 1,2,3,4,5,6,7


// reverse function
// The reverse() method reverses the order of the elements in an array.
const numbers9 = [1, 2, 3, 4, 5];
const reverse = numbers9.reverse();
console.log(reverse) // 5,4,3,2,1

// sort function
// The sort() method sorts the elements of an array in place and returns the array.
const numbers10 = [4, 2, 9, 6];
const sort = numbers10.sort((a, b) => a - b);
console.log(sort) // 2,4,6,9






