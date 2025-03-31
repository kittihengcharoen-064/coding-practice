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
  let largest = nums[0],
    secondLargest = nums[1];
  for (const num of nums) {
    secondLargest = largest;
    if (num > largest) {
      largest = num;
    }
  }
  return secondLargest;
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
  let largest = arr[0];
  for (const num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
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
  let cur = 1;
  while (cur < num) {
    cur++;
    if (num % cur == 0 && num != cur) {
      return false;
    }
  }
  return true;
}

test(isPrime, [
  [[7], true],
  [[10], false],
  [[13], true],
  [[24], false],
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
  let counter = 0;
  for (const char of str) {
    for (const vowel of ["a", "e", "i", "o", "u"]) {
      vowel === char && counter++;
    }
  }
  return counter;
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
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[arr.length - 1 - i];
  }
  return temp;
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
  let counter = 0;
  for (const num of arr) {
    counter += num;
  }
  return counter;
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
  for (let i = 0; i < str.length; i++) {
    return str[i] == str[str.length - 1 - i];
  }
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
  let fib = [0, 1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
}

test(fibonacci, [
  [[5], [0, 1, 1, 2, 3]],
  [[0], [0, 1, 1]],
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
  let out = 1;
  while (num > 1) {
    out = out * num;
    num--;
  }
  return out;
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
  let missings = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const start = arr[i],
      end = arr[i + 1],
      range = end - start;
    if (range > 1) {
      for (let j = start; j < end - 1; j++) {
        missings[missings.length] = j + 1;
      }
    }
  }
  return missings;
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
  let seen = {},
    out = [],
    j = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out;
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
  let smallest = arr[0];
  for (const num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
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
  let counter = 0;
  for (const num of arr) {
    if (num % 2 == 0) {
      counter += num;
    }
  }
  return counter;
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
  let counter = 0;
  for (const splitedStr of str) {
    if (splitedStr === char) {
      counter++;
    }
  }
  return counter;
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
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

test(sumOfDigits, [
  [[123], 6],
  [[987], 24],
]);
