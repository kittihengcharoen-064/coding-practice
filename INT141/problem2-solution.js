import { test } from "./utils.js";

// Define a class Animal and a subclass Dog
// Problem Statement:
// Write a class `Animal` with properties `name` and `sound` and a method `speak()` that returns the sound.
// Then create a subclass `Dog` that sets `sound` to "Woof" and overrides `speak()` to include the dog's name.

/**
 *
 * @param {string} name
 */
class Animal {
  // your code
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  speak() {
    return this.sound;
  }
}

class Dog extends Animal {
  // your code
  constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} says Woof`;
  }
}

function DogTest(name) {
  const dog = new Dog(name);
  return dog.speak();
}

test(DogTest, [
  [["Buddy"], "Buddy says Woof"],
  [["Max"], "Max says Woof"],
]);

// Sum of Squares using reduce
// Problem Statement:
// Write a function `sumOfSquares` that returns the sum of the squares of the numbers in an array using `reduce`

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function sumOfSquares(nums) {
  // your code
  return nums.reduce((a, b) => b ** 2 + a, 0);
}

test(sumOfSquares, [
  [[[1, 2, 3]], 14],
  [[[4, 5, 6]], 77],
]);

// Extract data using destructuring
// Problem Statement:
// Write a function `getFullName` that takes an object with `firstName` and `lastName` properties and returns the full name using object destructuring.

/**
 *
 * @param {{ firstName: string, lastName: string }} user
 * @returns {string}
 */
function getFullName(user) {
  // your code
  return `${user.firstName} ${user.lastName}`;
}

test(getFullName, [
  [[{ firstName: "John", lastName: "Doe" }], "John Doe"],
  [[{ firstName: "Jane", lastName: "Smith" }], "Jane Smith"],
]);

// Demonstrate "this" behavior
// Problem Statement:
// Create an object with a method that uses both a regular function and an arrow function to log `this.name`.

/**
 *
 * @returns {string[]}
 */
function testThisKeyword() {
  // your code
  const obj = {
    name: "Alice",
    arrowFunc: () => {
      return this?.name;
    },
    func: function () {
      return this.name;
    },
  };

  return [obj.func(), obj.arrowFunc()];
}

test(testThisKeyword, [[[], ["Alice", undefined]]]);

// Check if a property exists
// Problem Statement:
// Write a function `hasProperty(obj, key)` that checks if a key exists in the object using the `in` operator

/**
 *
 * @param {{[key: string]: any}} obj
 * @param {string} key
 * @returns {boolean}
 */
function hasProperty(obj, key) {
  // your code
  return key in obj;
}

test(hasProperty, [
  [[{ name: "Alice", age: 30 }, "name"], true],
  [[{ name: "Alice", age: 30 }, "email"], false],
]);

// Custom forEach
// Problem Statement:
// Write a function `customForEach(arr, callback)` that mimics the built-in `forEach` behavior.

/**
 *
 * @param {any[]} arr
 * @param {(value: any, index: number, arr: any[]) => void} callback
 */
function customForEach(arr, callback) {
  // your code
  arr.forEach(callback);
}

function TestCustomForEach() {
  const result = [];
  customForEach([1, 2, 3], (val) => result.push(val * 2));
  return result;
}

test(TestCustomForEach, [[[], [2, 4, 6]]]);

// Create a Person constructor and an Employee that inherits from it
// Problem Statement:
// Write a constructor function `Person` that has `name` and `age` properties.
// Create a constructor function `Employee` that inherits from `Person` and adds a `role` property.

/**
 *
 * @param {string} name
 * @param {number} age
 */
function Person(name, age) {
  // your code
  this.name = name;
  this.age = age;
}

Person.prototype.describe = function () {
  // your code
  return `${this.name} is a ${this.role} aged ${this.age}.`;
};

/**
 *
 * @param {string} name
 * @param {number} age
 * @param {string} role
 */
function Employee(name, age, role) {
  // your code
  this.name = name;
  this.role = role;
  this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function () {
  // your code
  return `${this.name} is a ${this.role} aged ${this.age}.`;
};

function EmployeeDescribeTest(employee) {
  return employee.describe();
}

test(EmployeeDescribeTest, [
  [[new Employee("Alice", 30, "Engineer")], "Alice is a Engineer aged 30."],
  [[new Employee("Bob", 25, "Designer")], "Bob is a Designer aged 25."],
]);

// Double even numbers
// Problem Statement:
// Write a function `doubleEvens` that doubles all even numbers in an array using `filter` and `map`

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
function doubleEvens(nums) {
  // your code
  return nums.filter((num) => num % 2 === 0).map((num) => num * 2);
}

test(doubleEvens, [
  [[[1, 2, 3, 4]], [4, 8]],
  [[[5, 6, 7, 8, 9]], [12, 16]],
]);

// Counter using closure
// Problem Statement:
// Write a function `createCounter` that returns a function which increments and returns a count each time it is called

/**
 *
 * @returns {function(): number}
 */
function createCounter() {
  // your code
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

function CounterTest() {
  const counter = createCounter();
  return [counter(), counter(), counter()];
}

test(CounterTest, [[[], [1, 2, 3]]]);

// Access property values
// Problem Statement:
// Write a function `getPropValue(obj, key)` that returns the value of a property using both dot and bracket notation.

/**
 *
 * @param {{[key: string]: any}} obj
 * @param {string} key
 * @returns {any}
 */
function getPropValue(obj, key) {
  // your code
  return obj[key];
}

test(getPropValue, [
  [[{ name: "Alice" }, "name"], "Alice"],
  [[{ age: 25 }, "age"], 25],
]);

// Capitalize names starting with 'a'
// Problem Statement:
// Write a function `capitalizeA` that takes an array of names,
// filters names starting with "a" or "A", and returns them capitalized.

/**
 *
 * @param {string[]} names
 * @returns {string[]}
 */
function capitalizeA(names) {
  // your code
  return names
    .filter((name) => name.toLowerCase().startsWith("a"))
    .map((name) => name.toUpperCase());
}

test(capitalizeA, [
  [[["alice", "bob", "anna", "Mike"]], ["ALICE", "ANNA"]],
  [[["Adam", "Eve", "alex"]], ["ADAM", "ALEX"]],
]);

// Count number of occurrences
// Problem Statement:
// Write a function `countOccurrences` that takes an array of strings
// and returns an object mapping each string to the number of times it occurs using `reduce`.

/**
 *
 * @param {string[]} arr
 * @returns {{ [key: string]: number }}
 */
function countOccurrences(arr) {
  // your code
  let r = arr.reduce((a, b) => {
    if (a[b]) {
      a[b]++;
    } else {
      a[b] = 1;
    }
    // console.log(a, b);
    return a;
  }, {});
  console.log(r);

  return r;
}

test(countOccurrences, [
  [
    [["apple", "banana", "apple", "orange", "banana", "apple"]],
    { apple: 3, banana: 2, orange: 1 },
  ],
  [[["a", "b", "a", "c", "b", "a"]], { a: 3, b: 2, c: 1 }],
]);

// Add greeting to users
// Problem Statement:
// Write a function `addGreeting` that takes an array of user objects with a `name` property,
// and returns a new array where each user has an additional `greeting` property.

/**
 *
 * @param {{ name: string }[]} users
 * @returns {{ name: string, greeting: string }[]}
 */
function addGreeting(users) {
  // your code
  return Array.from(users).map((user) => ({
    ...user,
    greeting: `Hello, ${user.name}!`,
  }));
}

test(addGreeting, [
  [
    [[{ name: "Alice" }, { name: "Bob" }]],
    [
      { name: "Alice", greeting: "Hello, Alice!" },
      { name: "Bob", greeting: "Hello, Bob!" },
    ],
  ],
]);

// Join words with dashes
// Problem Statement:
// Write a function `joinWithDash` that takes an array of strings and returns them joined with dashes.
// Use `forEach` to build the result string.

/**
 *
 * @param {string[]} words
 * @returns {string}
 */
function joinWithDash(words) {
  // your code
  let result = "";
  words.forEach(
    (word, i) => (result += word + (words.length == i + 1 ? "" : "-"))
  );
  return result;
}

test(joinWithDash, [
  [[["one", "two", "three"]], "one-two-three"],
  [[["hello", "world"]], "hello-world"],
]);

// Custom filter function
// Problem Statement:
// Write a function `customFilter(arr, callback)` that works like the built-in `filter`.

/**
 *
 * @param {any[]} arr
 * @param {(value: any, index: number, arr: any[]) => boolean} callback
 * @returns {any[]}
 */
function customFilter(arr, callback) {
  // your code
  return arr.filter(callback);
}

function TestCustomFilter() {
  return customFilter([1, 2, 3, 4, 5], (n) => n % 2 === 0);
}

test(TestCustomFilter, [[[], [2, 4]]]);
