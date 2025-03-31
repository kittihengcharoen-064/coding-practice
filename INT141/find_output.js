import { p } from "./utils.js";

let greetingMessage = "Hi";
greetingMessage.toUpperCase();

p("greetingMessage:", greetingMessage);

p("\n");
console.log(new Array(..."string"));
const colors = ["red", "yellow", "blue"];

let orders = [...[123, 456, 789], 567, 1234, [234, 15, [67]]];
orders[2] = 678;
const newOrder = [789, ...orders];
const orderCombination = orders + newOrder;

p("is type of combination order an Array:", orderCombination instanceof Array);
p("order combination:", orderCombination);
p("new order:", newOrder);
p("flaten with 2 depth:", newOrder.flat(2));
p("flaten with 1 depth:", newOrder.flat(1));

p("\n");

const fruits = [];
fruits.push("banana", "apple", "peach");
p("length of fruit:", fruits.length);
p("extract keys form fruits before length changed:", Object.keys(fruits));
fruits.length = 2;
p("extract keys form fruits after length changed:", Object.keys(fruits));
p(fruits.length);

p("\n");

p("revered colors:", colors.reverse());
p("Array.form with single number parameter:", Array.from(5).length);
p("Array.form with a string:", Array.from("Hello, World"));
p(
  "Array.form with map func:",
  Array.from([1, 2, 3, 4], (x) => x * 2)
);

p("\n");

p("is [1, 3, 5] an Array:", Array.isArray([1, 3, 5]));
p('is "[]" an Array:', Array.isArray([]));
p("is new Array(5) an Array:", Array.isArray(new Array(5)));
p("is new Int16Array an Array:", new Int16Array([15, 33]));

p("\n");

const array1 = [5, 12, 8, 130, 44];

let index = 2;

p(`An index of ${index} returns ${array1.at(index)}`);

index = -2;

p(`An index of ${index} returns ${array1.at(index)}`);

const array2 = ["a", "b", "c"];
const array3 = ["d", "e", "f"];
const array4 = array2.concat(array3);

p("output of array 4:", array4);

p("\n");

const pets = ["cat", "dog", "bat"];
p('pets = ["cat", "dog", "bat"]');
p('pets.includes("cat"):', pets.includes("cat"));
p('pets.includes(["cat", "bat"]):', pets.includes(["cat", "bat"]));
p('pets.includes("cat", "bat"):', pets.includes("cat", "bat"));

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

p("\n");

p('plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"]');
p("plants.pop():", plants.pop());

p("plants.shift():", plants.shift());

plants.pop();

p("plats after pop:", plants);

plants.shift();

p("plant after shift and pop:", plants);

p("\n");

const text = "Please give me a   score!";
p('text = "Please give me a   score!"');
p("text.trim():", text.trim());
p("text.charAte(2):", text.charAt(2));
p('text.concat(["x", "x", "x"]):', text.concat(["x", "x", "x"]));
p('text.endsWith("!"):', text.endsWith("!"));
p("text.at(2):", text.at(2));
p('text.replace(/[e*]/g, "x"):', text.replace(/[e*]/g, "x"));
p('text.split(" "):', text.split(" "));
p("text.slice(2,3):", text.slice(2, 3));
p("text.slice(1):", text.slice(2));
p("text.slice(-2,3):", text.slice(2, -3));