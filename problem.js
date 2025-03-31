import { p, test } from "./utils.js";

// Find the Second Largest Number in an Array
// Problem Statement:
// Write a function secondLargest(arr) that finds the second largest number in an array without sorting it.

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function secondLargest(nums) {
  // your code goes here
}

test(secondLargest, [
  [[[10, 20, 4, 45, 99]], 45],
  [[[60, 20, 70, 45, 99, 100]], 99],
]);

// Find the Largest Number in an Array
// Problem Statement:
// Write a function largestNumber(arr) that finds the largest number in an array.

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function largestNumber(arr) {
  // Your code goes here
}

test(largestNumber, [
  [[[10, 20, 30, 40, 50]], 50],
  [[[-10, -20, -30, -40, -50]], -10],
]);

// Check if a Number is Prime
// Problem Statement:
// Write a function isPrime(num) that checks if a given number is prime.

/**
 *
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
  // Your code goes here
}

test(isPrime, [
  [[7], true],
  [[10], false],
]);

// Count Vowels in a String
// Problem Statement:
// Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in a string.

/**
 *
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  // Your code goes here
}

test(countVowels, [
  [["hello"], 2],
  [["world"], 1],
  [["aeiou"], 5],
]);

// Reverse an Array
// Problem Statement:
// Write a function reverseArray(arr) that returns a new array with the elements of the input array in reverse order.

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function reverseArray(arr) {
  // Your code goes here
}

test(reverseArray, [
  [[[1, 2, 3]], [3, 2, 1]],
  [[[5, 6, 7]], [7, 6, 5]],
]);

// Find the Sum of All Numbers in an Array
// Problem Statement:
// Write a function sumArray(arr) that returns the sum of all numbers in an array.

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  // Your code goes here
}

test(sumArray, [
  [[[1, 2, 3]], 6],
  [[[10, 20, 30]], 60],
]);

// Check if a String is Palindrome
// Problem Statement:
// Write a function isPalindrome(str) that checks if a string is a palindrome (reads the same backward).

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  // Your code goes here
}

test(isPalindrome, [
  [["madam"], true],
  [["hello"], false],
]);

// Fibonacci Sequence
// Problem Statement:
// Write a function fibonacci(n) that returns the first `n` numbers in the Fibonacci sequence.

/**
 *
 * @param {number} n
 * @returns {number[]}
 */
function fibonacci(n) {
  // Your code goes here
}

test(fibonacci, [
  [[5], [0, 1, 1, 2, 3]],
  [[], [0, 1, 1]],
]);

// Find the Factorial of a Number
// Problem Statement:
// Write a function factorial(num) that returns the factorial of a given number (num!).
/**
 *
 * @param {number} num
 * @returns {number}
 */
function factorial(num) {
  // Your code goes here
}

test(factorial, [
  [[5], 120],
  [[3], 6],
]);

// Find the Missing Number in a Sequence
// Problem Statement:
// Write a function findMissingNumber(arr) that finds the missing number in a sequence from 1 to n.

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function findMissingNumber(arr) {
  // Your code goes here
}

test(findMissingNumber, [
  [[[1, 2, 3, 5, 8, 12]], [4, 6, 7, 9, 10, 11]],
  [[[10, 12, 13, 14]], [11]],
]);

// Remove Duplicates from an Array
// Problem Statement:
// Write a function removeDuplicates(arr) that removes duplicate elements from an array.

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function removeDuplicates(arr) {
  // Your code goes here
}

test(removeDuplicates, [
  [[[1, 2, 2, 3, 4, 4]], [1, 2, 3, 4]],
  [[[5, 5, 5, 6]], [5, 6]],
]);

// Find the Smallest Number in an Array
// Problem Statement:
// Write a function smallestNumber(arr) that finds the smallest number in an array.

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function smallestNumber(arr) {
  // Your code goes here
}

test(smallestNumber, [
  [[[10, 20, 30]], 10],
  [[[-5, -10, -15]], -15],
]);

// Sum of Even Numbers in an Array
// Problem Statement:
// Write a function sumEvenNumbers(arr) that returns the sum of all even numbers in an array.

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function sumEvenNumbers(arr) {
  // Your code goes here
}

test(sumEvenNumbers, [
  [[[1, 2, 3, 4, 5]], 6],
  [[[10, 12, 15]], 22],
]);

// Count the Occurrences of a Character in a String
// Problem Statement:
// Write a function countChar(str, char) that returns the number of times a specific character appears in a string.

/**
 *
 * @param {string} str
 * @param {string} char
 * @returns {number}
 */
function countChar(str, char) {
  // Your code goes here
}

test(countChar, [
  [["hello", "l"], 2],
  [["world", "o"], 1],
]);

// Sum of Digits in a Number
// Problem Statement:
// Write a function sumOfDigits(num) that returns the sum of the digits of a given number.

/**
 *
 * @param {number} num
 * @returns {number}
 */
function sumOfDigits(num) {
  // Your code goes here
}

test(sumOfDigits, [
  [[123], 6],
  [[987], 24],
]);
