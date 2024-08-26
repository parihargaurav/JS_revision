// const funnyNumber = (array) => { // 4 operations from 0 to 3
//     for(let i = 0; i< array.length; i++){
//         if(i===3) return array[i];
//     }
// };

// const nums = [420, 96, 12, 58, 5252];

// console.time("funnyNumber");


// console.log(funnyNumber(nums));
// console.timeEnd("funnyNumber")time complexity ; O(1)
// here time taken is funnyNumber: 13.57ms


// normal code 
// const funnyNumber = (array) =>{ // 1 operation 
//     return array[2];
// };
// const nums = [420, 96, 12, 58, 52];

// console.time("funnyNumber");


// console.log(funnyNumber(nums));
// console.timeEnd("funnyNumber") time complexity ; O(1)
// // here without loop it will take less time to execute.


// // another eg 
// function GoingUpDown(n){
// // 2n +3 operations  // time complexity ; O(N)

//     console.log("Going forward");
//     for(var i = 0; i< n; i++){
//         console.log(i);
//     }
//     console.log("At the End going back");
//     for (var j = n-1; j>=0; j--){
//         console.log(j);
//     }
//     console.log("At the Start !");

// }
// console.log(GoingUpDown(3));



// function printBoth(n){
// // n*n = n^2 operations = O(N^2)
//     for(var i = 0; i< n; i++){
//         for (var j = 0 ; j< n ; j++){
//             console.log(i, j);
//         }
//     }
// };
// console.log(printBoth(2))


// SPACE COMPLEXITY

// const funnyNumber = (array) =>{
//     let sum = 0;
//     for(let i= 0; i< array.length; i++){
//         sum+= array[i];

//     }

//     return sum;
// }

// let score = [24, 42,21,455,432];
// console.log(funnyNumber(score)) // it gives space constan t as value is constant

//  in js for space complexity to say

// primitive type: 
// Boolean, num, undefined, null - constant space complexity
// for Strings, arrays, objects==  we have dynamic space complexity.



// O(N) space complexity

// const funnyNumberArray = (n) =>{
//     const array = [];
//     for (let i = 0; i<n; i++){
//         array.push(i * 69)
//     }
//     return array;

// };
// console.log(funnyNumberArray(4))


