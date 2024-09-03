// q1. Palindrome Number
// an integer is a palindrome when it reasa the same forward and backward.
// For example, 121 is a palindrome while 123 is not.

// const isPalindrome = function(x){
//     return x < 0 ? false : x === +x.toString().split("").reverse().join("");
//     // to string is convert to string 
//     // 121 => "121" => ["1", "2", "1"] => ["1", "2", "1"] => "121"
//     // here + sign is for integer back from string comversion.

// };
// const result = isPalindrome(121);
// console.log(result); // true




// Q2; Fibonacci Number
// fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// F(0) = 0, F(1) = 1
// F(n)= F(n -1) + F(n - 2), for n > 1
// indexing starts from 0
// input n = 3 => output = 2

// using for loop

// var fib = function(n){
//     const arr = [0, 1];
//     for(let i = 2; i <= n; i++){
//     arr.push(arr[i - 1] + arr[i - 2]);
// }
// console.log( arr[n]);
// };
// fib (6);


// // using recurion :
// const fib = function(n){
//     if(n <= 1) return n;
//     return fib(n -1) + fib(n -2);
// };




// Q3 valid anagram 
// an anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

// input   s = anagram, t = nagaram =  true
// input w = rat, e = cat = false.
 

// const isAnagram =function (s, t){
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");
//     return s ===t;
// };


