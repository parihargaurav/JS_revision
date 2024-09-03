// map filter and reduce are array methods.

// what is map()?
// map() is a method of the Array object.
//  It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.

const nums = [1, 2, 3, 4];
const multiplyThree = nums.map((num, i, arr)=>{
    return num * 3;
});
 console.log(multiplyThree); // [3, 6, 9, 12]

 // filter()?
 // The filter() method creates a new array filled with elements that pass a test provided by a function.

 const filter = nums.filter((nums)=> {
    return nums > 2;
 });
 console.log(filter); // [3, 4]


// reduce ()?
// The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator.

const sum = nums.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);
console.log(sum); // 10
// initial accumulator is 0
// if there is no initial value,  it takes first element of array as value for accumulator.




// A polyfill, in the context of JavaScript, is a piece of code (usually written in JavaScript) that provides functionality that is not natively supported by a web browser.


// Polyfill for map()
// Array.map((num, i, arr) => { })
// cb = callback

Array.prototype.myMap = function (cb) {
    let temp = []; // empty array to initialze
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
};


// Polyfill for filter()
// cb = callback

Array.prototype.myFilter = function (cb) {
    let temp = []; // empty array to initialze
    for(let i = 0; i < this.length; i++) {
     if(cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
};




// diff between for each and map
/*Use forEach() when you need to perform side effects, such as logging, API calls, or modifying external state.
Use map() when you need to transform data and create a new array with the transformed values.*/ 




// map filter reduce allows chaining and it helps us to get use to it in single function.