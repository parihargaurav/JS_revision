// q1- print second largest number
// given an array  arr of size n, print second largest
// distinct element from an array.

// input: [12. 35, 1, 10, 34, 1] == output - 34
// input: [1, 2, 3, 4, 4] == output - 3

// solution: Approach 1

function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr)); // for set O(N)
  uniqueArr.sort((a, b) => { // sorting O(nlogn)
    return b - a; // for decending for ascending -B
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  }
  else{
    -1;
  }
  console.log(uniqueArr);
}
console.log(secondLargest([1, 2, 3, 4, 4]));
// time complexity - O(nlogn) taking worst time complexity.

// space complexity - O(n) for set and sorting.



// Approach 2 ===
//   here - below means next values in that variable
// [12, 35, 1, 10, 34, 1]
// secondLargest =negative_infinity- 12 -34
// largest = 12- 35- 

// negative_infinity holds least minimum value in js

function secondLargestOptimised(arr) {
let largest = Number.NEGATIVE_INFINITY;
let secondLargest = Number.NEGATIVE_INFINITY;
for (let i = 0; i < arr.length; i++) { // o(N) =  arr.length -= n
if (arr[i] > largest) {
secondLargest = largest;
largest = arr[i];
} else if (arr[i] > secondLargest && arr[i] !== largest) {
secondLargest = arr[i];
}
}
return secondLargest;
}
console.log(secondLargestOptimised([12, 35, 1, 10, 34, 1])); // 34

// Space complexity : O(1)
// time complexity : O(n)

// ========================================================= //

// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// Brute Force Approach
function rotateArray(nums, k) {
  let size = nums.length;

  if (k > size) {
    k = k % size; // here means if k is greater than size of array. then K % size . say k is 8 and size of array is 4 8% 4 => 2
  }

  const rotated = nums.splice(size - k, size); // [5, 6, 7]
  nums.unshift(...rotated);

  return nums;
}

// Time Complexity - O(n)
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));



// Optimised Approach
function rotateArrayOptimised(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1); // O(n)
  reverse(nums, 0, k - 1); // O(k)
  reverse(nums, k, nums.length - 1); // O(n-k)

  return nums;
}

// Time Complexity -> O(n)
// Space Complexity -> O(1)

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateArrayOptimised([-1, -100, 3, 99], 2));



// =========================================================================================================== //


// Q 3: Remove the duplicates from the sorted Array  
/*  Given an integer array nums sorted in non- decreasing order, remove
the duplicates in-place(meaning no need to create a new array do operations inside of it) such that each unique element
appears only once. the relatives order of he elements should be kept the same. then return the number of unique elements in nums.
 
 
 input: [1, 1, 2]           -------- >>>>>>    Output: 2 - [1, 2, _]
 input: [0,0,1,1,1,2,2,3,3,4]    ----------------->>>>>>>>>>>> output: 5 , [0,1,2,3,4, _,_,_,_]*/


  // With JS Methods
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    // O(n)
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); // O(1)
      i--;
    }
  }

  return nums.length;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
// console.log(removeDuplicates([1, 1, 2]));

// Without JS Methods - Two pointer Approach
function removeDuplicatesNew(nums) {
  if (nums.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
console.log(removeDuplicatesNew([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); 